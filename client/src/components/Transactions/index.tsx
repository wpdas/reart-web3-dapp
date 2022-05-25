import useTransactionContract from '@app/hooks/useTransactionContract';
import {
  CardsContainer,
  Container,
  Content,
  Title,
  TitleSmall,
  TitleWrapper,
} from './styles';
import TransactionCard from './TransactionCard';

const Transactions = () => {
  const { currentAccount, transactions, transactionCount } =
    useTransactionContract();

  return (
    <Container>
      <Content>
        {currentAccount ? (
          <TitleWrapper>
            <Title>Your most recent NFTs</Title>
            <TitleSmall>(you own {transactionCount} NFTs)</TitleSmall>
          </TitleWrapper>
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
