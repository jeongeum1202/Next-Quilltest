import styled, { css } from "styled-components";

export const Test = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary20};
  `};
`;
