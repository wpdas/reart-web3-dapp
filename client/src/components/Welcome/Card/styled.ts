import styled from '@emotion/styled';

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  align-items: flex-start;
  height: 160px;
  /* width: 100%; */
  width: 288px;
  margin: 20px 0%;

  background-color:#a099ff;
  background-image: 
    radial-gradient(at 83% 67%, rgb(152, 231, 156) 0, transparent 58%), 
    radial-gradient(at 67% 20%, hsla(357,94%,71%,1) 0, transparent 59%), 
    radial-gradient(at 88% 35%, hsla(222,81%,65%,1) 0, transparent 50%), 
    radial-gradient(at 31% 91%, hsla(9,61%,61%,1) 0, transparent 52%), 
    radial-gradient(at 27% 71%, hsla(336,91%,65%,1) 0, transparent 49%), 
    radial-gradient(at 74% 89%, hsla(30,98%,65%,1) 0, transparent 51%), 
    radial-gradient(at 53% 75%, hsla(174,94%,68%,1) 0, transparent 45%);

  border-radius: 16px;
`

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const CardRow = styled.div`
  display: flex;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: solid 2px ${({ theme }) => theme.color.white};
`

export const CardText = styled.p`
  color: ${({ theme }) => theme.color.fontWhite};
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 0;
  font-family: ${({theme}) => theme.font.regularFont};
`

export const CardTextSemiBold = styled.p`
  color: ${({ theme }) => theme.color.fontWhite};
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  margin-top: 4px;
  margin-bottom: 0;
  font-family: ${({theme}) => theme.font.regularFont};
`