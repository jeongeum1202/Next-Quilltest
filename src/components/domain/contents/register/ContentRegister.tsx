import { Input } from '@/components/common';
import QuillEditor from '@/components/common/editor/QuillEditor';

import React from 'react';
import * as S from './styled';
import TextArea from '@/components/common/textarea/TextArea';
type Props = {};

export default function ContentRegister({}: Props) {
  return (
    <S.ContentWrapper>
      <header>메인 콘텐츠 제작</header>
      <div>
        <h1>지금 당장 도전해보세요.</h1>
        <p>
          퀄리티 높은 콘텐츠를 기획하여 동네소식을 제작하면 무료로 광고도 삽입할
          수 있어요.
        </p>
      </div>
      <TextArea />
      <QuillEditor />
    </S.ContentWrapper>
  );
}
