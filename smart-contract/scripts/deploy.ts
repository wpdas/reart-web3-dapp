import { run, ethers } from "hardhat";

const main = async () => {
  // Use getContractFactory function factory that is going to generate instances of that specific contract
  const Transactions = await ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  // The address of the deployed transaction (smart contract)
  // O endereço para acessar nosso Smart Contract que foi deploiado na blockchain network

  // Info: Para fazer o deploy, precisamos ter algum ethereum na carteira porque tudo
  // que fazemos na Network da Ethereum requer algo conhecido como "gas" que é uma pequena fração fração de ethereum
  // usado para fazer com que algo ocorra.

  // Para obter esse ethereum para ser usado como gas, podemos ir para: https://goerlifaucet.com/ (pode-se pesquisar por outros
  // no google caso este não esteja funcionando).
  // Este serviço providencia alguns ethereums de teste de graça. Tudo que você precisa fazer é inserir o endereço da sua
  // carteira [wallet address usando MetaTask].
  console.log("Transactions deployed to:", transactions.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
