import useTransactionContract from '@app/hooks/useTransactionContract';
import { CardsContainer, Container, Content, Title } from './styles';
import TransactionCard from './TransactionCard';

const Transactions = () => {
  const { currentAccount, transactions } = useTransactionContract();

  return (
    <Container>
      <Content>
        {currentAccount ? (
          <Title>Your most recent NFTs</Title>
        ) : (
          <Title>Connect your account to see your NFT collection</Title>
        )}

        <CardsContainer>
          {transactions &&
            transactions
              // Show the newest ones first
              .sort(
                (transactionA, transactionB) =>
                  transactionB.timestampDate.getTime() -
                  transactionA.timestampDate.getTime(),
              )
              .map((transaction, index) => (
                <TransactionCard key={index} id={index} {...transaction} />
              ))}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default Transactions;
