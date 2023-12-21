import styled, { css } from 'styled-components';

type ButtonProps = {};

export const Button = styled.button<ButtonProps>`
  ${({ theme }) => css`
    width: 90px;
    height: 40px;
    border-radius: 10px;
    background-color: ${theme.colors.primary20};
  `};
`;
