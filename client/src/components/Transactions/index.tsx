import useTransactionContract from '@app/hooks/useTransactionContract';
import dummyData from '@app/utils/dummyData';
import { CardsContainer, Container, Content, Title } from './styles';
import TransactionCard from './TransactionCard';

const Transactions = () => {
  const { currentAccount } = useTransactionContract();

  return (
    <Container>
      <Content>
        {currentAccount ? (
          <Title>Latest Transactions</Title>
        ) : (
          <Title>Connect your account to see the latest transactions</Title>
        )}

        <CardsContainer>
          {dummyData.reverse().map(transaction => (
            <TransactionCard key={transaction.id} {...transaction} />
          ))}
        </CardsContainer>
      </Content>
    </Container>
  );
};

export default Transactions;
