// NOTE: Using direct files here instead of requesting on page load https://cosmos.directory
const stargaze = require('../../../modules/chain-registry/stargaze/chain.json')
const juno = require('../../../modules/chain-registry/juno/chain.json')
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'

export interface Rpc {
  address: string;
  provider: string | null;
}

export interface RpcConfigs {
  [juno: string]: Rpc[];
  stars: Rpc[];
}

declare global {
  interface Window {
    __RPC_CONFIGS: RpcConfigs;
  }
}

/**
 * @since 1.0.0
 * @status stable
 *
 * Loads basic network configs available for RPC to use
 */
@customElement('al-config')
export default class AlConfig extends LitElement {

  // TODO: Add deployed contracts for Alias


  private loadConfigs = () => {
    const rpcs = { juno: [], stars: [] }

    // make sure each is loading only the RPC definitions, since thats all that's needed
    if (juno && juno.apis && juno.apis.rpc) rpcs.juno = juno.apis.rpc
    if (stargaze && stargaze.apis && stargaze.apis.rpc) rpcs.stars = stargaze.apis.rpc

    // inject RPC configs into window context
    if (typeof window !== undefined) {
      window.__RPC_CONFIGS = rpcs
    }
  }

  render() {
    if (!window.__RPC_CONFIGS) this.loadConfigs()
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'al-config': AlConfig;
  }
}
