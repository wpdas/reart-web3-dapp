import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #181918;
  margin: 16px;
  padding: 12px;
  border-radius: 6px;

  & :hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  min-width: 270px;
  max-width: 300px;

  /* @media only screen and (min-width: 640px) {
    min-width: 270px;
    max-width: 300px;
  } */

  /* @media only screen and (min-width: 1280px) {
    min-width: 450px;
    max-width: 500px;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-top: 8px; */
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;

  & span {
    font-weight: 700;
  }
`;

export const Amount = styled.p`
  color: ${({ theme }) => theme.color.fontWhite};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  & span {
    font-weight: 700;
  }
`;

export const Message = styled(Amount)``;

export const Image = styled.img`
  width: 100%;
  height: 256px;
  border-radius: 6px;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  margin-top: 12px;
`;

export const TimestampWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.opaqueBlue};
  padding: 10px 20px;
  margin-top: 16px;
  border-radius: 6px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  /* width: fit-content; */
`;

export const Timestamp = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.font.regularFont};
  color: ${({ theme }) => theme.color.fontWhite};
  font-size: 14px;
  line-height: 1;
  margin: 0;
  font-weight: 600;
`;
