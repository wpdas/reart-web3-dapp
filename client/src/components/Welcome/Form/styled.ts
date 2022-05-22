import styled from '@emotion/styled';
import * as glassmorphisms from '../../glassmorphisms'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  width: calc(100% - 40px);

  ${glassmorphisms.reoundedBlue};

  @media only screen and (min-width: 640px) {
    width: 384px;
  }
`

export const Input = styled.input`
  margin: 8px 0;
  width: 100%;
  border-radius: 2px;
  padding: 8px;
  outline: none;
  font-family: ${({theme}) => theme.font.regularFont};
  background: transparent;
  color: ${({theme}) => theme.color.fontWhite};
  font-size: 14px;
  line-height: 20px;

  @media only screen and (min-width: 1020px) {
    width: 368px;
  }

  &::placeholder{
    color: rgba(156, 163, 175, 1);
  }

  ${glassmorphisms.white()}
  border: none;
`

export const Line = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(156, 163, 175, 1);
  margin: 8px 0;
`