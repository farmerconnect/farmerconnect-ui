import { HTMLAttributes } from 'react';
import CustomStyles from '../CustomStyles';

export enum TagVariantEnum {
  DANGER = 'danger',
  PRIMARY = 'primary',
  SUCCESS = 'success',
  WARNING = 'warning',
  SECONDARY = 'secondary',
}

export type TagVariant =
  | TagVariantEnum.DANGER
  | TagVariantEnum.PRIMARY
  | TagVariantEnum.SUCCESS
  | TagVariantEnum.WARNING
  | TagVariantEnum.SECONDARY;

interface ITagColor {
  color: string;
  backgroundColor: string;
}

export interface ITag {
  colors?: {
    [TagVariantEnum.DANGER]?: ITagColor;
    [TagVariantEnum.PRIMARY]?: ITagColor;
    [TagVariantEnum.SUCCESS]?: ITagColor;
    [TagVariantEnum.WARNING]?: ITagColor;
    [TagVariantEnum.SECONDARY]?: ITagColor;
  };
}

export interface ITagProps extends CustomStyles, HTMLAttributes<HTMLDivElement> {
  color?: string;
  variant?: TagVariant;
  backgroundColor?: string;
}
