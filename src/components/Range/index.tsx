import Slider from 'react-input-slider';
import { IRange } from './interfaces';
import { mergeStyles } from './utils';

const Range = ({ styles, ...props }: IRange) => <Slider styles={mergeStyles(props, styles)} {...props} />;

Range.defaultProps = {
  axis: 'x',
  styles: {},
};

export default Range;
