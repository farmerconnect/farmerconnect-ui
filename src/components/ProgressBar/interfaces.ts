import colors from '../../styles/colors';

export const progressBarColorList = [
  'fc_black_100',
  'fc_black_70',
  'fc_black_30',
  'fc_black_10',
  'fc_black_5',
  'fc_beige',
  'fc_white',
  'fc_red',
  'fc_grey',
  'fc_green',
  'fc_yellow',
  'fc_dark_green',
  'fc_dark_blue',
  'fc_dark_yellow',
  'fc_light_green',
  'fc_light_yellow',
  'fc_light_red',
  'fc_light_blue',
  'fc_cyan_blue',
] as const;
type ProgressBarColor = typeof progressBarColorList[number] & keyof typeof colors;
export interface IProgressBarContainer {
  height?: number;
  trackColor?: ProgressBarColor;
}

export interface IProgressBar extends IProgressBarContainer {
  backgroundColor: ProgressBarColor;
  completed: number;
}
