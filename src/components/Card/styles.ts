import styled from 'styled-components';
import { ICardProps } from './interfaces';

const fontFamily = `font-family: 'Red Hat Text', sans-serif;`;

const getBorderPadding = (props: ICardProps) => {
  if (props.type === 'Main')
    return '32px';
  else
    return '24px';
}

const getTitleFontSize = (props: ICardProps) => {
  if (props.type === 'Main')
    return '34px';
  else
    return '22px';
}

const getTitleLineHeight = (props: ICardProps) => {
  if (props.type === 'Main')
    return '45px';
  else
    if (props.action)
      return '28px'
    else
      return '29px';
}

const getTitlePaddingBottom = (props: ICardProps) => {
  if (props.type === 'Main')
    return '24px';
  else
    return '16px';
}

const getHeaderHeight = (props: ICardProps) => {
  if (props.type === 'Main')
    if (props.action)
      return '101px'
    else
      return '69px';
  else
    if (props.action)
      return '68px'
    else
      return '45px';
}

const getContentHeight = (props: ICardProps) => {
  var actionSize = getHeaderHeight(props);
  var collapseSize = getFooterHeight(props);
  return `calc(100% - ${actionSize} - ${collapseSize})`;
}

const getFooterHeight = (props: ICardProps) => {
  if (props.type === 'Main')
    if (props.collapse)
      return '72px'
    else
      return '0px';
  else
    if (props.collapse)
      return '72px'
    else
      return '0px';
}

export const Container = styled.div<ICardProps>`
  max-height: ${(props) => (props.maxHeight)};
  max-width: ${(props) => (props.maxWidth)};
  background: #F3F3F3;
  border-radius: 12px;
  padding-top: ${(props) => (props.action ? '0px' : getBorderPadding(props))};
  padding-right: ${(props) => (props.action ? '0px' : getBorderPadding(props))};
  padding-bottom: ${(props) => (props.collapse ? '0px' : getBorderPadding(props))};
  padding-left: ${(props) => getBorderPadding(props)};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Header = styled.div<ICardProps>`
  height: ${(props) => getHeaderHeight(props)};
`;

export const Title = styled.div<ICardProps>`
  ${fontFamily}
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => getTitleFontSize(props)};
  line-height: ${(props) => getTitleLineHeight(props)};
  color: #141414;
  display: inline-block;
  float: left;
  padding-top: ${(props) => (props.action ? getBorderPadding(props) : '0px')};
  padding-right: 0px;
  padding-bottom: ${(props) => getTitlePaddingBottom(props)};
  padding-left: 0px;
`;

export const Action = styled.div<ICardProps>`
  display: ${(props) => (props.action ? 'inline-block' : 'none')};
  float: right;
  padding: 16px 16px 0px 16px;
`;

export const Content = styled.div<ICardProps>`
  background: #F3F3F3;
  margin-right: ${(props) => (props.action ? getBorderPadding(props) : '0px')};
  height: ${(props) => getContentHeight(props)};
`;

export const Footer = styled.div<ICardProps>`
  position: relative;
  margin-right: ${(props) => (props.action ? getBorderPadding(props) : '0px')};
  height: ${(props) => getFooterHeight(props)};
`;

export const Expand = styled.div<ICardProps>`
  display: ${(props) => (props.collapse ? '' : 'none')};
  padding: 17px 0px 17px 0px;
`;