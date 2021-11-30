import colors from '../../styles/colors';
import { IRange, RangeValues } from './interfaces';

export const getDefaultStyles = ({ axis }: IRange): RangeValues => {
  const isXAxis = axis === 'x';
  const isXYAxis = axis === 'xy';

  return {
    track: {
      backgroundColor: colors.fc_beige,
      height: isXAxis ? 4 : '100%',
      width: isXAxis || isXYAxis ? '100%' : 4,
    },
    active: {
      backgroundColor: colors.fc_green,
    },
    thumb: {
      backgroundColor: colors.fc_green,
      width: 16,
      height: 16,
    },
    disabled: {
      opacity: 0.5,
    },
  };
};

export const mergeStyles = (props: IRange, styles: RangeValues) => {
  const defaultStyles = getDefaultStyles(props) || {};

  return Object.keys(defaultStyles).reduce((prev: RangeValues, curr: string) => {
    const key = curr as keyof typeof defaultStyles;

    return {
      ...prev,
      [curr]: Object.assign({}, defaultStyles[key], styles?.[key]),
    };
  }, {});
};
