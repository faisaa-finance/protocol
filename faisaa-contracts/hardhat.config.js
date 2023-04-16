/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

// Change private keys accordingly - ONLY FOR DEMOSTRATION PURPOSES - PLEASE STORE PRIVATE KEYS IN A SAFE PLACE
// Export your private key as
//       export PRIVKEY=0x.....
const { PRIVKEY, PRIVKEYDEV } = process.env;

module.exports = {
  defaultNetwork: 'core',
  networks: {
    hardhat: {},
    core: {
      url: 'https://rpc.test.btcs.network',
      accounts: [PRIVKEY],
      chainId: 1115,
      network_id: '1115',
    },
    dev: {
      url: 'http://127.0.0.1:9933',
      accounts: [PRIVKEY],
      network_id: '1115',
      chainId: 1115,
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      accounts: [PRIVKEYDEV],
      network_id: '1115',
      chainId: 1115,
    }
  },
  solidity: {
    compilers: [
      {
        version: '0.5.16',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: '0.6.6',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: {
      moonbaseAlpha: 'key_here', // Moonbeam Moonscan API Key
    },
  },
  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
};
