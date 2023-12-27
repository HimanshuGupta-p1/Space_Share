//https://eth-sepolia.g.alchemy.com/v2/IeVW9v26j2oPfDeUEB1RArr5ZYXeFuRH

require('@nomiclabs/hardhat-waffle');
const API_URL = 'https://eth-sepolia.g.alchemy.com/v2/IeVW9v26j2oPfDeUEB1RArr5ZYXeFuRH'
const PRIVATE_KEY = '7f6d08f1a908f013bc344d6ddf0900c16c0ae7159f6bb060a88b3b62b3229d9a'
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  },
}

// 0x07cE1Daa05f4f8a52Ecd222CCa8F10505b4c8E16