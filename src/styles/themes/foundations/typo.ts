import { css } from 'styled-components';

export const typo = {
  head: {
    xs: () => css`
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.6rem;
    `,
    sm: () => css`
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.9rem;
    `,
    md: () => css`
      font-size: 1.4rem;
      font-weight: 700;
      line-height: 2rem;
    `,
    lg: () => css`
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 2.1rem;
    `,
    xl: () => css`
      font-size: 1.6rem;
      font-weight: 700;
      line-height: 2.2rem;
    `,
    xxl: () => css`
      font-size: 1.8rem;
      font-weight: 700;
      line-height: 2.4rem;
    `,
  },
};
