require("@nomicfoundation/hardhat-toolbox")
const { mnemonic } = require('./secrets.json');


//npx hardhat run --network chiado scripts/deploy.js

// Todo - 0x3FB57d3759F64ab3EC44b9F71204B1F0FABC25A0



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

