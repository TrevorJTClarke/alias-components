import { CosmWasmClient } from 'cosmwasm/dist/bundle.js'
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch';
import styles from './avatar.styles';

/**
 * @since 0.1.0
 * @status stable
 *
 * @csspart base - The component's internal wrapper.
 * @csspart address - The container that wraps the avatar icon.
 * @csspart image - The avatar image.
 *
 * @cssproperty --size - The size of the avatar.
 */
@customElement('al-avatar')
export default class AlAvatar extends LitElement {
  static styles = styles;

  @state() private hasError = false;
  @state() private rpcClient;

  /** The wallet address storing the metadata used for generating image or NFT spec. */
  @property() address = '';

  /** The fallback image source to use for the avatar. */
  @property() image = '';

  /** A label to use to describe the avatar to assistive devices. */
  @property() label = '';

  /** Initials to use as a fallback when no image is available (1-2 characters max recommended). */
  @property() initials = '';

  /** The shape of the avatar. NFTs will default to "hex" to match twitter */
  @property({ reflect: true }) shape: 'circle' | 'square' | 'rounded' | 'hex' = 'circle';

  @watch('image')
  handleImageChange() {
    // Reset the error when a new image is provided
    this.hasError = false;
    this.render()
  }

  private computeBoxShadow(rgbArray?: Array<number>) {
    if (!this.clientWidth) return;
    const p = this.renderRoot?.querySelector('.avatar')
    if (!p) return;
    const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;
    const pixelSize = 4
    // "rgba" data
    let size = 6
    let shadow = ''

    if (rgbArray && rgbArray.length > 1) {
      const pixels = rgbArray.length / 4
      size = Math.sqrt(pixels)
      let data = [...rgbArray]
      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          const rgba = data.splice(0,4)
          if (rgba && typeof rgba[0] !== 'undefined') shadow += ` ${c * pixelSize}px ${r * pixelSize}px 0 rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]}),`
        }
      }
      p.style.background = `rgba(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]}, ${rgbArray[3]})`
    } else {
      // Seed from address!
      let seedData = this.address.split('').map((l, i) => {
        let n = `${l}`.charCodeAt(0)
        let r = [0, 0, 0, 0.1]
        if (i % 1 == 0) r[0] = n
        if (i % 2 == 0) r[1] = n
        if (i % 3 == 0) r[2] = n
        if (n < 100) {
          r[3] = 1
          if (r[0]) r[0] = r[0] + 90
          if (r[1]) r[1] = r[1] + 90
          if (r[2]) r[2] = r[2] + 90
        }
        if (n >= 100 && n < 110) r[3] = 0.3
        if (n >= 110) r[3] = 0.2
        return r
      })
      seedData = seedData.concat(seedData)

      for (let r = 0; r < size; r++) {
        for (let c = 0; c < size; c++) {
          if (seedData.length > 0) {
            const rgba = seedData.splice(0,1)
            shadow += ` ${c * pixelSize}px ${r * pixelSize}px 0 rgba(${rgba[0][0]}, ${rgba[0][1]}, ${rgba[0][2]}, ${rgba[0][3]}),`
          } else {
            const alpha = rand(0, 30) / 100
            shadow += ` ${c * pixelSize}px ${r * pixelSize}px 0 rgba(0,0,0,${alpha}),`
            // NOTE: This could get enabled with a variable?
            // shadow += ` ${c * pixelSize}px ${r * pixelSize}px 0 rgba(${rand(0, 255)},${rand(0, 255)},${rand(0, 255)},${alpha}),`
          }
        }
      }
    }

    const scale = Math.ceil(this.clientWidth / pixelSize) / size + 0.05
    p.style.setProperty('--pixel-transform', `scale(${scale})`)
    p.style.setProperty('--pixel-size', `${pixelSize}px`)
    p.style.setProperty('--pixel-box-shadow', shadow.slice(0, shadow.length-1))
  }

  private async getClient() {
    if (this.rpcClient) return this.rpcClient
    // return CosmWasmClient.connect('https://rpc-juno.itastakers.com')
    return CosmWasmClient.connect('https://rpc.stargaze-apis.com/')
  }

  private async queryRpc(contract, msg) {
    const client = await this.getClient()
    try {
      const q = await client.queryContractSmart(contract, msg);
      console.log('queryRpc', q);
      return q;
    } catch (e) {
      console.log('GET FAILED', e);
      return;
    }
  }

  private async queryCw20(contract) {
    const client = await this.getClient()
    try {
      const q = await client.queryContractSmart(contract, { marketing_info: {} });
      // console.log('queryCw20', q);
      if (q && q.logo && q.logo.url) this.image = q.logo.url
      console.log('q.logo.url', q.logo.url);
    } catch (e) {
      console.log('GET FAILED', e);
      return;
    }
  }

  // TODO: request token_uri, then resolve to image
  private async queryCw721(contract, token_id) {
    const client = await this.getClient()
    let uri
    try {
      const q = await client.queryContractSmart(contract, { nft_info: { token_id } });
      console.log('queryCw721', q);
      if (q && q.token_uri) uri = `https://ipfs.stargaze.zone/ipfs/${q.token_uri}`.replace('ipfs://', '')
    } catch (e) {
      console.log('GET FAILED', e);
      return;
    }

    if (uri) {
      // TODO: change to AXIOS
      // this.image = `https://ipfs.stargaze.zone/ipfs/${q.token_uri}`.replace('ipfs://', '')
      this.image = `https://ipfs.stargaze.zone/ipfs/bafybeicvvfnlxuo3ineufnwqcjvwvo64dkazv5an4lclrymb77fmnga2ze/images/8394.png`
    }
  }

  // Connects to RPC, queries the metadata specified by user
  // @watch('address')
  reload() {
    // TODO:
    // - IF contract Address: 
    //   - request metadata 
    // - IF wallet Address: 
    //   - request alias metadata 
    //     - if icon data, print shadow
    //     - if NFT
    //       - request NFT metadata
    //       - load image & hex
    let type = 'cw721'
    let contract = 'stars17s7emulfygjuk0xn906athk5e5efsdtumsat5n2nad7mtrg4xres3ysf3p'
    // let type = 'cw20'
    // let contract = 'juno168ctmpyppk90d34p3jjy658zf5a5l3w8wk35wht6ccqj4mr0yv8s4j5awr'
    // let contract = 'juno1re3x67ppxap48ygndmrc7har2cnc7tcxtm9nplcas4v0gc3wnmvs3s807z'
    // let contract = 'juno1pshrvuw5ng2q4nwcsuceypjkp48d95gmcgjdxlus2ytm4k5kvz2s7t9ldx'

    switch (type) {
      case 'cw20':
        this.queryCw20(contract)
        break;
      case 'cw721':
        this.queryCw721(contract, '8394')
        break;
      default:
        this.computeBoxShadow()
    }

    // const fake16RgbImage = [245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,244,245,245,255,244,245,245,255,242,242,242,255,241,241,241,255,240,241,241,255,240,240,240,255,241,241,241,255,243,244,244,255,244,245,245,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,244,245,245,255,242,242,242,255,233,232,232,255,220,216,216,255,186,178,178,255,174,162,162,255,170,156,156,255,163,148,148,255,171,158,158,255,209,205,205,255,240,241,241,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,243,243,243,255,230,228,228,255,203,196,196,255,151,133,133,255,112,86,86,255,107,78,80,255,105,77,78,255,104,76,77,255,101,74,75,255,92,68,69,255,141,129,129,255,226,225,225,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,227,226,225,255,151,139,137,255,98,76,76,255,93,68,69,255,89,66,66,255,80,59,60,255,64,47,48,255,53,39,41,255,50,37,38,255,52,39,40,255,145,138,138,255,235,235,235,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,215,213,213,255,129,120,120,255,79,65,64,255,62,45,36,255,67,46,30,255,72,49,27,255,72,49,26,255,70,48,27,255,66,45,31,255,68,52,46,255,170,165,164,255,244,245,245,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,243,244,244,255,231,231,230,255,166,152,131,255,137,100,32,255,151,106,14,255,176,126,10,255,182,128,10,255,175,122,11,255,156,108,16,255,145,112,54,255,201,193,181,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,231,209,157,255,224,172,43,255,176,131,16,255,243,191,19,255,252,194,1,255,221,170,24,255,199,147,17,255,229,180,62,255,237,224,193,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,239,217,163,255,235,186,56,255,179,141,40,255,245,199,45,255,253,199,5,255,220,180,58,255,203,157,37,255,239,191,74,255,242,230,201,255,245,246,246,255,243,245,245,255,244,245,245,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,242,229,199,255,240,188,57,255,244,190,22,255,253,200,20,255,249,191,7,255,251,200,27,255,244,186,17,255,239,196,94,255,244,240,228,255,224,239,246,255,205,231,243,255,242,244,245,255,245,246,246,255,245,246,246,255,245,246,246,255,245,246,246,255,242,231,200,255,212,159,51,255,240,178,0,255,216,159,0,255,183,126,2,255,232,174,0,255,230,165,1,255,218,177,98,255,243,241,235,255,145,201,239,255,153,204,240,255,240,243,245,255,245,246,246,255,245,246,246,255,245,246,246,255,244,244,243,255,229,203,145,255,181,125,22,255,183,121,1,255,222,156,0,255,216,151,0,255,215,147,0,255,171,108,0,255,193,141,47,255,235,220,179,255,172,197,207,255,203,221,233,255,243,245,245,255,245,246,246,255,245,246,246,255,245,246,246,255,244,245,244,255,237,228,207,255,213,198,162,255,96,121,74,255,176,115,4,255,198,126,0,255,163,112,14,255,127,143,98,255,223,205,168,255,223,217,200,255,185,187,185,255,231,232,231,255,244,245,245,255,245,246,246,255,243,242,239,255,233,211,196,255,230,198,181,255,220,215,202,255,182,185,172,255,70,126,99,255,47,115,62,255,90,127,43,255,70,129,64,255,108,153,128,255,208,208,199,255,199,201,198,255,196,198,198,255,237,238,238,255,245,246,246,255,244,245,245,255,233,227,216,255,205,151,107,255,207,123,87,255,184,130,145,255,187,172,173,255,171,178,158,255,115,133,116,255,92,126,98,255,22,113,70,255,100,165,131,255,205,207,187,255,172,174,165,255,208,209,209,255,243,245,244,255,245,246,246,255,244,245,245,255,227,227,216,255,163,181,122,255,171,181,125,255,189,148,159,255,198,167,160,255,220,216,194,255,199,200,185,255,191,197,182,255,92,155,127,255,123,173,147,255,205,213,195,255,196,197,190,255,227,228,227,255,244,245,245,255,245,246,246,255]
    // this.computeBoxShadow(fake16RgbImage)
  }

  updated() {
    this.reload()
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          avatar: true,
          'avatar--circle': this.shape === 'circle',
          'avatar--rounded': this.shape === 'rounded',
          'avatar--square': this.shape === 'square',
          'avatar--hex': this.shape === 'hex'
        })}
        role="img"
        aria-label=${this.label}
      >
        ${html`<img
              part="image"
              class="avatar__image"
              src="${this.image}"
              alt=""
              @error="${() => (this.hasError = true)}"
            />`}
        ${html`<div part="address" class="avatar__pixels"></div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'alias-avatar': AlAvatar;
  }
}
