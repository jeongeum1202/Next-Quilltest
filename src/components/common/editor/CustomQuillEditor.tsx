import dynamic from 'next/dynamic';
import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  const [viewContent, setViewContent] = useState('');
  const quillRef = useRef<ReactQuill>(null);
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: '#toolbar',
        handlers: {},
      },
    };
  }, []);
  const handleChange = (contents: any) => {
    setContents(contents);
    console.log('contents:', contents);
    console.log('view:', viewContent);
  };

  const parseString = (html: any) => {
    console.log(html);
    // DOM Parser를 생성합니다. 문자열로 된 데이터를 DOM Document로 변환합니다.
    const doc = new DOMParser().parseFromString(html, 'text/html');
    // parsed document에서 textContent를 사용하여 순수 텍스트만을 추출합니다.
    return doc.body.innerHTML;
  };

  useEffect(() => {
    setViewContent(() => contents.replace(/<(?!br\s*\/?>)[^>]*>/g, ''));
  }, [contents]);
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
    <>
      <S.QuillWrapper>
        <CustomToolbar />
        <QuillWrapper
          onChange={handleChange}
          modules={modules}
          formats={formats}
          value={contents}
          theme="snow"
          forwardedRef={quillRef}
          placeholder="내용을 입력해주세요."
        />
      </S.QuillWrapper>
      <div>
        <p>원본 HTML 내용:</p>
        <div dangerouslySetInnerHTML={{ __html: parseString(contents) }}></div>
        <p>텍스트만 추출한 내용:</p>
        <div>
          {parseString(
            '<p>안녕하세요!</p><p><br></p><p>줄바꿈을 해볼게요</p><p>한줄은 안되더라고요</p><p><br></p><p>두줄을 해줘야해요</p><p><br></p><p><strong><em><u>글씨스타일 바꿔볼게요</u></em></strong></p><p><br></p><p><strong><em><u>이렇게해도 되는건가?!?!</u></em></strong></p><p>해봅시다.</p>'
          )}
        </div>
      </div>
    </>
  );
}
