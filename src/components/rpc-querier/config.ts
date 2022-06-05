// const stargaze = require('chain-registry/stargaze/chain.json')
// const juno = require('chain-registry/juno/chain.json')

// // Testnets
// const juno_testnet = require('./testnets/juno_testnet.json')
// const stargaze_testnet = require('./testnets/stargaze_testnet.json')

// interface IncludeFile {
//   ok: boolean;
//   status: number;
//   html: string;
// }

// formats chain registry to smaller obj
// TODO: Change this!
export function getConfigs() {
  return {
    // juno: this.formatConfig(juno),
    // juno_testnet: this.formatConfig(juno_testnet),
    // stargaze: this.formatConfig(stargaze),
    // stargaze_testnet: this.formatConfig(stargaze_testnet),
  }
}

export function getConfig(key: string) {
  return this.getConfigs()[key]
}