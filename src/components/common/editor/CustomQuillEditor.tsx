import dynamic from 'next/dynamic';
import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import * as S from './styled';
import CustomToolbar from './CustomToolBar';

type ForwardedQuillComponent = {
  forwardedRef: React.Ref<ReactQuill>;
  onChange?: (value: string) => void;
  modules: any;
  formats?: string[];
  value: string;
  theme: string;
  placeholder: string;
};

const QuillWrapper = dynamic(
  async () => {
    const { default: QuillComponent } = await import('react-quill');
    return function comp({ forwardedRef, ...props }: ForwardedQuillComponent) {
      return <QuillComponent ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false, loading: () => <div>loading...</div> }
);

export default function CustomQuillEditor() {
  const [contents, setContents] = useState('');
  const quillRef = useRef<ReactQuill>(null);
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {},
      },
    };
  }, []);

  const formats = [
    'font',
    'size',
    'header',
    'align',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'color',
    'background',
    'link',
    'image',
  ];
  return (
    <S.QuillWrapper>
      <CustomToolbar />
      <QuillWrapper
        modules={modules}
        formats={formats}
        value={contents}
        theme="snow"
        forwardedRef={quillRef}
        placeholder="내용을 입력해주세요."
      />
    </S.QuillWrapper>
  );
}
