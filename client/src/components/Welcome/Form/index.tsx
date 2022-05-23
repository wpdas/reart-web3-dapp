import { useState } from 'react';
import Button from '@app/components/Button';
import Loader from '@app/components/Loader';
import SimpleMessage from '@app/components/Modals/SimpleMessage';
import GlobalPortal from '@app/containers/GlobalPortal';
import useTransactionContract from '@app/hooks/useTransactionContract';
import { FormWrapper, Input, Line } from './styled';

const Form = () => {
  const [showModal, setShowModal] = useState(false);

  const { handleChange, sendTransaction, processingTransaction, formData } =
    useTransactionContract();

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    const { addressTo, amount, keyword, message } = formData;

    event.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction().then(() => {
      setShowModal(true);
    });
  };

  return (
    <FormWrapper>
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        step="0.0001"
        onChange={e => handleChange(e, 'addressTo')}
        value={formData.addressTo}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        onChange={e => handleChange(e, 'amount')}
        value={formData.amount}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        onChange={e => handleChange(e, 'keyword')}
        value={formData.keyword}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        onChange={e => handleChange(e, 'message')}
        value={formData.message}
      />

      <Line />

      {processingTransaction ? (
        <Loader />
      ) : (
        <Button secondary onClick={handleSubmit}>
          Send Now
        </Button>
      )}

      {showModal && (
        <GlobalPortal>
          <SimpleMessage
            message="Ether sent successfully!"
            onConfirm={() => {
              setShowModal(false);
            }}
          />
        </GlobalPortal>
      )}
    </FormWrapper>
  );
};

export default Form;
