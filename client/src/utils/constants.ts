/**
 * Quando um contrato passa pelo deploy, um ABI (Application Binary Interface) é gerado
 * na pasta smart-contract/artifacts/contracts/<NomeDoContrato>/<NomedoContrato>.json.
 * Isso é a maneira padrão para interagir com os contratos dentro do ecossistema Ethereum, ambos,
 * de fora da blockchain e para casos de interação d contrato para contrato. Esse arquivo contem
 * todas as informações sobre uma Smart Contract específica (que foi criada). Esse arquivo deve
 * ser disponibilizado no client.
 */
import transactionsAbi from './contracts/Transactions.json';

export const transactionsContractABI = transactionsAbi.abi;
export const contractAddress = '0x7a07a66173fdD6AbBEd3E43222eDBDc5FaCad76B';

// Links
export const navLinks = [
  { label: 'Collection', to: '/collection', external: false },
  { label: 'My NFTs', to: '/my-nfts', external: false },
  {
    label: 'Git Repo',
    to: 'https://github.com/Wpdas/reart-web3-dapp',
    external: true,
  },
  {
    label: 'LinkedIn',
    to: 'https://www.linkedin.com/in/wenderson-pires-silva/?locale=en_US',
    external: true,
  },
  { label: 'MetaMask', to: 'https://metamask.io/', external: true },
];
