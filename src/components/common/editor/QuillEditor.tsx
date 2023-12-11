import dynamic from 'next/dynamic';
import React, { useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';

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

export default function QuillEditor() {
  const [contents, setContents] = useState('');
  const quillRef = useRef<ReactQuill>(null);
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],

          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          [
            {
              color: [
                '#000000',
                '#e60000',
                '#ff9900',
                '#ffff00',
                '#008a00',
                '#0066cc',
                '#9933ff',
                '#ffffff',
              ],
            },
            {
              background: [],
            },
          ],
          ['link', 'image', 'video'],
        ],
        handlers: {},
      },
    }),
    []
  );

  const formats = [
    'font',
    'size',
    'header',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];
  return (
    <QuillWrapper
      modules={modules}
      formats={formats}
      value={contents}
      theme="snow"
      forwardedRef={quillRef}
      placeholder="내용을 입력해주세요."
    />
  );
}
