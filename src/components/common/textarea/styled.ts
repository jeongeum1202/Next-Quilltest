import styled, { css } from 'styled-components';

export const TextareaWrapper = styled.textarea`
  ${({ theme }) => css`
    width: 345px;
    height: 155px;
    border: 1px solid #eee;
    border-radius: 5px;
  `}
`;
