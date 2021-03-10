import React from 'react';
import { Container } from './styles';
import { IItemSingle } from '../../interfaces';

const ItemSingle: React.FC<IItemSingle> = ({
  content,
  handleSelected,
  ...props
}) => {

  return (
    <Container onClick={(e: any) => handleSelected(e, content)}>
      <b>{content.description}</b>
      <p>Registered by: {content.org_name}︱ID: {content.id.split(':')[5].split('.')[1]}︱Company prefix: {content.id.split(':')[5].split('.')[0]}</p>
    </Container>
  )
}

export default ItemSingle;