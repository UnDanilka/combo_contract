require("@nomicfoundation/hardhat-toolbox")
const { mnemonic } = require('./secrets.json');


//npx hardhat run --network chiado scripts/deploy.js

// Todo - 0xFC9f70F206C340E2e78FE4B27C37f0BCC1c36Ea2



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

