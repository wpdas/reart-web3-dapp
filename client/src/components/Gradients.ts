import styled from '@emotion/styled';

export const GradientBgWelcome = styled.div`
  background-color: #0f0e13;
  background-image: radial-gradient(
      at 0% 0%,
      hsla(253, 16%, 7%, 1) 0,
      transparent 50%
    ),
    radial-gradient(at 50% 0%, hsla(225, 39%, 30%, 1) 0, transparent 50%),
    radial-gradient(at 100% 0%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
`;

export const GradientBgServices = styled.div`
  background-color: #0f0e13;
  background-image: radial-gradient(
      at 0% 0%,
      hsla(253, 16%, 7%, 1) 0,
      transparent 50%
    ),
    radial-gradient(at 50% 100%, hsla(225, 39%, 25%, 1) 0, transparent 50%);
`;

export const GradientBgTransactions = styled.div`
  background-color: #0f0e13;
  background-image: radial-gradient(
      at 0% 100%,
      hsla(253, 16%, 7%, 1) 0,
      transparent 50%
    ),
    radial-gradient(at 50% 0%, hsla(225, 39%, 25%, 1) 0, transparent 50%);
`;

export const GradientBgFooter = styled.div`
  background-color: #0f0e13;
  background-image: radial-gradient(
      at 0% 100%,
      hsla(253, 16%, 7%, 1) 0,
      transparent 53%
    ),
    radial-gradient(at 50% 150%, hsla(339, 49%, 30%, 1) 0, transparent 50%);
`;

export const TitleGradient = styled.h1`
  background-color: #fff;
  background-image: radial-gradient(
      at 4% 36%,
      hsla(0, 0%, 100%, 1) 0,
      transparent 53%
    ),
    radial-gradient(at 100% 60%, rgb(0, 0, 0) 0, transparent 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
