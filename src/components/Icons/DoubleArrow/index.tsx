import { PROPERTIES } from './constants';
import { IDoubleArrowProps } from './interfaces';
import { StyledDoubleArrow } from './styles';

const DoubleArrow = ({ fill = 'currentColor', direction = 'down', ...props }: IDoubleArrowProps) => {
  const { width, height, paths } = PROPERTIES;

  return (
    <StyledDoubleArrow
      fill="none"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      direction={direction}
      {...props}
    >
      {paths.map(path => <path d={path} fill={fill} />)}
    </StyledDoubleArrow>
  );
};

export default DoubleArrow;
