import dynamic from 'next/dynamic';
import React, { useCallback, useEffect, useState } from 'react';
import { HexColorInput, HexColorPicker } from 'react-colorful';

type Props = {};

/* 동적 import를 통해 스타일 관련 에러 해결 */
const DynamicChromePicker = dynamic(
  () => import('react-color/lib/components/chrome/Chrome'),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

const DynamicSketchPicker = dynamic(
  () => import('react-color/lib/components/sketch/Sketch'),
  {
    loading: () => <p>loading...</p>,
    ssr: false,
  }
);

export default function SignageEditor({}: Props) {
  const [color, setColor] = useState<string>('');

  const handleChangeComplete = useCallback(
    (color: string) => {
      setColor(() => color);
    },
    [color]
  );

  useEffect(() => {
    console.log(color);
  }, [color]);
  return (
    <div>
      <h2>컬러 팔레트 테스트 (react-color)</h2>
      <div style={{ display: 'flex', gap: '15px', margin: '15px' }}>
        <DynamicChromePicker
          color={color}
          onChange={(color) => handleChangeComplete(color.hex)}
          width="200px"
        />
        <DynamicSketchPicker
          color={color}
          onChange={(color) => handleChangeComplete(color.hex)}
          presetColors={[]}
          width="200px"
        />
      </div>
      <div style={{ margin: '25px' }}>
        <HexColorPicker color={color} onChange={setColor} />
        <HexColorInput color={color} onChange={setColor} />
      </div>
      <div
        style={{
          backgroundColor: `${color}`,
          width: '150px',
          height: '150px',
          margin: '0 auto',
        }}
      ></div>
    </div>
  );
}
