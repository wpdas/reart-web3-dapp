// hardhat-waffle plugin to build smart contract tests using Waffle in Hardhat, taking advantage of both.
import '@nomiclabs/hardhat-waffle';

export default {
  solidity: '0.8.4',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/kbBJfDHdVy1aCDxojef36JYAPoALDE3O',
      // getting account private key: go to metatask -> Account Details -> Click "Export private key" ->
      // copy the generated private key and past it below
      accounts: [
        '807bdd8c7b8aa3b76bfd83362af31f2930af86d667d339d00c3c71df94d6d33c',
      ],
    },
  },
};
