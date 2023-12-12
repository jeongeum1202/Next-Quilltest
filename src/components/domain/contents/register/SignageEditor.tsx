import React, { useEffect, useState } from 'react';
import { ChromePicker, SketchPicker } from 'react-color';

type Props = {};

export default function SignageEditor({}: Props) {
  const [color, setColor] = useState<string>('#000');

  const handleChangeComplete = (color: string) => {
    setColor(() => color);
  };

  useEffect(() => {
    console.log(color);
  }, [color]);
  return (
    <div>
      <h2>컬러 팔레트 테스트 (react-color)</h2>
      <SketchPicker
        color={color}
        onChangeComplete={(color) => handleChangeComplete(color.hex)}
        presetColors={[]}
        width="200px"
      />
      <ChromePicker
        color={color}
        onChangeComplete={(color) => handleChangeComplete(color.hex)}
        width="200px"
      />
      <div
        style={{ backgroundColor: `${color}`, width: '200px', height: '200px' }}
      ></div>
    </div>
  );
}
