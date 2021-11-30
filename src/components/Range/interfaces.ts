import { InputSliderProps } from 'react-input-slider';

type ValueOf<T> = T[keyof T];

export type RangeValues = ValueOf<Pick<InputSliderProps, 'styles'>>;

export interface IRange extends InputSliderProps {}
