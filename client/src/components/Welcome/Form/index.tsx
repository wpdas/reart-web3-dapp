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

  const { addressTo, amount, keyword, message } = formData;

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction().then(() => {
      setShowModal(true);
    });
  };

  const sendButtonEnabled =
    addressTo && amount && keyword && message && window.ethereum;

  return (
    <FormWrapper>
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        step="0.0001"
        onChange={e => handleChange(e, 'addressTo')}
        value={addressTo}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        step="0.0001"
        min="0.0001"
        onChange={e => handleChange(e, 'amount')}
        value={amount}
      />
      <Input
        placeholder="NFT Keyword (Gif)"
        name="keyword"
        type="text"
        onChange={e => handleChange(e, 'keyword')}
        value={keyword}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        onChange={e => handleChange(e, 'message')}
        value={message}
      />

      <Line />

      {processingTransaction ? (
        <Loader />
      ) : (
        <Button secondary disabled={!sendButtonEnabled} onClick={handleSubmit}>
          Send Now
        </Button>
      )}

      {showModal && (
        <GlobalPortal>
          <SimpleMessage
            message="NFT successfully purchased"
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
