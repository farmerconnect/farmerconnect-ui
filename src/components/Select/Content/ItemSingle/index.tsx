import React from 'react';
import { Container } from './styles';
import { IItemSingle } from '../../interfaces';

const ItemSingle: React.FC<IItemSingle> = ({ content, handleSelected, contentRender, ...props }) => {
  return <Container onClick={(e: any) => handleSelected(e, content)}>{contentRender}</Container>;
};

export default ItemSingle;
