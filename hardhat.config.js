require("@nomicfoundation/hardhat-toolbox")
const { mnemonic } = require('./secrets.json');


//npx hardhat run --network chiado scripts/deploy.js

// Todo - 0x26dCd5AD4965E64FA7585D787B29793319448e46



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    chiado: {
      url: "https://rpc.chiadochain.net",
      gasPrice: 1000000000,
      accounts: {
        mnemonic
      },
    },
  },
}

