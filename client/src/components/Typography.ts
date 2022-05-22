import styled from '@emotion/styled';

type CommonProps = {
  bold?: boolean;
};

export const H3 = styled.h3<CommonProps>`
  font-size: 18px;
  color: ${({ theme }) => theme.color.fontBlack};
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.regularFont : theme.font.regularFont};
  line-height: 24px;
`;

export const P = styled.p<CommonProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontDark};
  font-family: ${({ theme, bold }) =>
    bold ? theme.font.regularFont : theme.font.regularFont};
  line-height: 24px;
`;
