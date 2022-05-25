## <img alt="Reart Logo" src="./client/src/assets/images/reart-logo.svg" width="230" />

- MetaTask: Used to create accounts and play over the app. This project is also using the MetaTask RPC API. [Check out the MetaTask RPC API here] (https://docs.metamask.io/guide/rpc-api.html)

- [Hardhat](https://hardhat.org/): Ethereum development environment. Hardhat is a development environment to compile, deploy, test, and debug your Ethereum software. It helps creating a base environment to work on the project allowing us to run Solidity locally. We use it to test the smart contracts as well. The contract bootstrap was created using this tool using the following command:

```sh
npx hardhat
```

- Hardhat -> hardhat-waffle plugin to build smart contract tests using Waffle in Hardhat, taking advantage of both.

- [Alchemy](https://www.alchemy.com/): blockchain developer platform. Ajuda a organizar os deploys dos blockchain smart contracts de cada aplicação.

- [Ethers.JS](https://docs.ethers.io/v4/getting-started.html): A compact and complete JavaScript library for Ethereum.

- [GIPHY](https://developers.giphy.com/): Used to get the Gif images.

- Estou usando a rede Goerli (Goerli Network)

- Quando um contrato passa pelo deploy, um ABI (Application Binary Interface) é gerado na pasta smart-contract/artifacts/contracts/<NomeDoContrato>/<NomedoContrato>.json. Isso é a maneira padrão para interagir com os contratos dentro do ecossistema Ethereum, ambos, de fora da blockchain e para casos de interação d contrato para contrato. Esse arquivo contem todas as informações sobre uma Smart Contract específica (que foi criada). Esse arquivo deve ser disponibilizado no client.

## Env

.env file with your GIPHY API KEY

```
REACT_APP_GIPHY_API_KEY=<your_api_key_here>
```

## CD - Firebase

recursos: Firestore Database, Hosting

Root package.json usa o Node v14.18.0 para dar suporte aos recursos necessários do Firebase.

Usando Firebase integrado com github actions para fazer deploy toda vez que a branch main for atualizada.

## Logo

- Reart Logo - by [Bruno Teodoro](https://www.linkedin.com/in/brunoteodoro/)

## TODO:

- Views (nos detalhes e nos cards das collections)
- Comprar (Details)
- Exibir Cards comprados (usando dados atualizados como image ID)
