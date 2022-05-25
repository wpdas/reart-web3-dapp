import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #181918;
  margin: 16px;
  border-radius: 6px;
  min-width: 270px;
  max-width: 270px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05, 1.05);
  }
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
