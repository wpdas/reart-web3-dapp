import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  border-radius: 100px;
  width: 32px;
  height: 32px;
  border-bottom-width: 2px;
  border-bottom-color: ${({theme}) => theme.color.white};
  border-bottom-style: solid;
  animation: ${spin} 1s linear infinite;
`