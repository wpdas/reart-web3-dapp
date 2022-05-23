import React from 'react';
import { Body, CustomButton, Overlay, Paragraph } from './styles';

type Props = {
  message: string;
  onConfirm?: () => void;
};

const SimpleMessage: React.FC<Props> = ({ message, onConfirm }) => {
  return (
    <Overlay>
      <Body>
        <Paragraph>{message}</Paragraph>
        <CustomButton onClick={onConfirm}>Okay</CustomButton>
      </Body>
    </Overlay>
  );
};

export default SimpleMessage;
