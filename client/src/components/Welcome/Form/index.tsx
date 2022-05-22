import { useState } from 'react';
import Button from '@app/components/Button';
import Loader from '@app/components/Loader';
import { FormWrapper, Input, Line } from './styled';

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string,
  ) => {};

  const handleSubmit = () => {};

  return (
    <FormWrapper>
      <Input
        placeholder="Address To"
        name="addressTo"
        type="text"
        step="0.0001"
        onChange={e => handleChange(e, 'addressTo')}
      />
      <Input
        placeholder="Amount (ETH)"
        name="amount"
        type="number"
        onChange={e => handleChange(e, 'amount')}
      />
      <Input
        placeholder="Keyword (Gif)"
        name="keyword"
        type="text"
        onChange={e => handleChange(e, 'keyword')}
      />
      <Input
        placeholder="Enter Message"
        name="message"
        type="text"
        onChange={e => handleChange(e, 'message')}
      />

      <Line />

      {isLoading ? (
        <Loader />
      ) : (
        <Button secondary onClick={handleSubmit}>
          Send Now
        </Button>
      )}
    </FormWrapper>
  );
};

export default Form;
