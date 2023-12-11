import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 375px;
    height: 100vh;
    box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.08);
    margin: 0 auto;
    padding: 0 15px;
  `}
`;
