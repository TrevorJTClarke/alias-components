const { CosmWasmClient } = require('cosmwasm/dist/bundle.js')
import { html, LitElement } from 'lit'
import { customElement } from 'lit/decorators.js'
import { emit } from '../../internal/event'
import { Rpc, RpcConfigs } from '../config/config'

declare global {
  interface Window {
    __RPC_CONFIGS: RpcConfigs;

    // The raw connections
    __RPC_CONNECTIONS: any;

    // component available instance
    // Allows easier interfacing that auto-detects the right network provider based on addresses
    __RPC: any;
  }
}

/**
 * @since 1.0.0
 * @status stable
 *
 * Creates a READ-ONLY RPC querier instance, both a DOM element that can signal connection events
 * and a window/document level JS instance for easier method uses.
 *
 * @event al-querier-loaded - Emitted when the rpc querier is loaded.
 * @event {{ status: number }} al-querier-error - Emitted when the rpc querier due to an error.
 */
@customElement('al-querier')
export default class AlQuerier extends LitElement {

  // NOTE: Defaulting to index 0 provider until multi-provider support is setup
  private getQueryClient = async (providers: Rpc[]) => {
    const rpcEndpoint = providers[0].address
    return CosmWasmClient.connect(rpcEndpoint)
  }

  // creates window "__RPC" instance that makes easy querier
  private async loadSmartRpc() {
    if (!window.__RPC) window.__RPC = {}
    function query(address: string, queryMsg: Record<string, unknown>): Promise<any> {
      // based on loaded configs, check which network matches address prefix
      const configPrefixes = window.__RPC_CONFIGS ? Object.keys(window.__RPC_CONFIGS) : []
      let network = configPrefixes[0]
      configPrefixes.forEach(k => {
        // we found a matching network!
        if (address.search(k) > -1) network = k
      })

      return window.__RPC_CONNECTIONS[network].queryContractSmart(address, queryMsg)
    }

    // inject!
    window.__RPC.query = query
  }

  private async loadRpcs() {
    if (typeof window === undefined || !window) return
    if (!window.__RPC_CONNECTIONS) window.__RPC_CONNECTIONS = {}
    try {
      // loop all found configs "__RPC_CONFIGS", establish "__RPC_CONNECTIONS", and return smart instance
      if (window.__RPC_CONFIGS) {
        await Object.keys(window.__RPC_CONFIGS).forEach(async network => {
          window.__RPC_CONNECTIONS[network] = await this.getQueryClient(window.__RPC_CONFIGS[network])
        })
      }

      await this.loadSmartRpc()

      emit(this, 'al-querier-loaded')
    } catch {
      emit(this, 'al-querier-error', { detail: { status: -1 } })
    }
  }

  render() {
    this.loadRpcs()
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'al-querier': AlQuerier;
  }
}
