import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #181918;
  margin: 16px;
  border-radius: 6px;

  & :hover {
    box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }

  min-width: 270px;
  max-width: 270px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
`;

export const Anchor = styled.a`
  color: ${({ theme }) => theme.color.fontBlack};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 12px;
  line-height: 24px;
  text-decoration: none;

  & span {
    font-weight: 600;
  }
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 34px;
  margin-top: 6px;

  & svg {
    margin-right: 8px;
  }
`;

export const Amount = styled.p`
  color: ${({ theme }) => theme.color.fontBlack};
  font-family: ${({ theme }) => theme.font.regularFont};
  font-size: 16px;
  line-height: 24px;
  margin: 0;

  & span {
    font-weight: 600;
  }
`;

export const Message = styled(Amount)`
  font-size: 12px;
  line-height: 24px;
`;

export const Keyword = styled(Amount)`
  font-weight: 600;
`;

export const Image = styled.img`
  width: 100%;
  height: 256px;
  border-radius: 6px;
  border-bottom-left-radius: 0%;
  border-bottom-right-radius: 0%;
  object-fit: cover;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const Timestamp = styled.p`
  font-family: ${({ theme }) => theme.font.regularFont};
  color: ${({ theme }) => theme.color.fontBlack};
  font-size: 12px;
  line-height: 24px;
  margin: 0;

  & span {
    font-weight: 600;
  }
`;

export const ImageInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.white};
  padding: 12px;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`;
