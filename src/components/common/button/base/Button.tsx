import { PropsWithChildren } from 'react';
import * as S from './styled';

type ButtonProps = {};

export default function Button({ children }: PropsWithChildren) {
  return <S.Button>{children}</S.Button>;
}
