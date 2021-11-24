import { ITable } from './interfaces';
import colors from '../../styles/colors';

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const tableDefaultStyles: ITable = {
  colors: {
    head: {
      color: colors.fc_black_100,
      boxShadowColor: colors.fc_beige,
      backgroundColor: colors.fc_beige,
    },
    body: {
      color: colors.fc_black_100,
      borderColor: colors.fc_black_10,
      backgroundColor: colors.fc_white,
      backgroundHoverColor: colors.fc_black_5,
    },
  },
};
