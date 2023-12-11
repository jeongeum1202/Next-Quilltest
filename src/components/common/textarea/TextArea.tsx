import React from 'react';
import * as S from './styled';
type Props = {};

export default function TextArea({}: Props) {
  return (
    <S.TextareaWrapper placeholder="사이니지용 소개글을 입력해주세요"></S.TextareaWrapper>
  );
}
