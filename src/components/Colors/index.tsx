import * as React from 'react';
import * as S from './styles';

export interface IColorSwatch {
  color: string;
  colorName: string;
}

const ColorSwatch: React.FC<IColorSwatch> = ({ colorName, color, ...props }) => {
  return (
    <S.Container colorName={colorName} color={color} {...props}>
      <S.ClickToCopy
        onClick={() => {
          navigator.clipboard.writeText(color);
        }}
        title="Click to copy!"
      >
        {colorName}
      </S.ClickToCopy>
      <S.SwatchLabel>{color}</S.SwatchLabel>
    </S.Container>
  );
};

export default ColorSwatch;
