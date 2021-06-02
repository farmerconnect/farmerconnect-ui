interface SVGProps {
  fill?: string;
  width?: string;
  height?: string;
}

export interface IArrowColors {
  activeColor?: string;
  defaultColor?: string;
  inactiveColor?: string;
}

export interface IArrowCommonProps {
  isActive?: boolean;
  isInactive?: boolean;
  direction?: 'up' | 'down' | 'right' | 'left';
}

export interface IArrow extends IArrowCommonProps {
  colors?: IArrowColors;
}

export interface IArrowProps extends SVGProps, IArrowColors, IArrowCommonProps {}
