import { SIZE_VARIANTS } from './constants';
import { IArrowProps } from './interfaces';
import { StyledArrow } from './styles';

const Arrow = ({ fill = 'currentColor', size = 'regular', direction = 'down', ...props }: IArrowProps) => {
  const { width, height, path } = SIZE_VARIANTS[size] || SIZE_VARIANTS.regular;

  return (
    <StyledArrow
      fill="none"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      direction={direction}
      {...props}
    >
      <path d={path} fill={fill} />
    </StyledArrow>
  );
};

export default Arrow;
