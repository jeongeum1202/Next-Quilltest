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

// const CustomToolbar = () => {
//   return (
//     <div id="toolbar">
//       <select className="ql-font" />

//       <select className="ql-size" defaultValue="normal">
//         <option value="small">본문 1</option>
//         <option value="normal">본문 2</option>
//         <option value="large">본문 3</option>
//         <option value="huge">본문 4</option>
//       </select>

//       <select className="ql-header">
//         <option value="1">제목 1</option>
//         <option value="2">제목 2</option>
//         <option value="3">제목 3</option>
//         <option value="4">제목 4</option>
//       </select>

//       <select className="ql-align" defaultValue="">
//         <option value="" />
//         <option value="center" />
//         <option value="right" />
//         <option value="justify" />
//       </select>

//       <button className="ql-bold" />
//       <button className="ql-italic" />
//       <button className="ql-underline" />
//       <button className="ql-strike" />
//       <button className="ql-blockquote" />

//       <button className="ql-list" value="ordered" />
//       <button className="ql-list" value="bullet" />

//       <select className="ql-color" />
//       <select className="ql-background" />

//       <button className="ql-link" />
//       <button className="ql-image" />
//     </div>
//   );
// };

export default function QuillEditor() {
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
