require("@nomiclabs/hardhat-ethers");
require("@truffle/dashboard-hardhat-plugin");
let privateKey = 'fc5bb76d67a0d9833f1b07d9d33d14dbb2385653a395d21d990cb754d8132388'


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    zeniq: {
      url: "https://smart.zeniq.network:9545",
      chainId: 383414847825,
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
}
