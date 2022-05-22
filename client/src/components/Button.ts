import styled from '@emotion/styled';

type ButtonProps = {
  secondary?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 8px 0px;
  padding: 12px;
  background-color: ${({ theme, secondary }) => secondary ? theme.color.deepDarkBlue : theme.color.blue};
  color: ${({theme}) => theme.color.fontWhite};
  border-radius: 100px;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  font-family: ${({theme}) => theme.font.regularFont};
  border: ${({ theme, secondary }) => secondary ? `1px solid ${theme.color.opaqueBlue}` : 'none'};
  width: 100%;

  &:hover {
    background-color: ${({ theme, secondary }) => secondary ? theme.color.opaqueBlue : theme.color.darkBlue};
  }

  &:focus {
    outline: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

export default Button;