import React from 'react';
import { Container } from './styles';

interface IProps {
  content: any;
  handleSelected: any;
}

const ItemSingle: React.FC<IProps> = ({
  content,
  handleSelected,
  ...props
}) => {

  return (
    <Container onClick={(e: any) => handleSelected(e, content)}>
      <b>{content.name}</b>
      <p>Registered by: {content.information.registered}︱ID: {content.information.id}︱Company prefix: {content.information.companyPrefix} </p>
    </Container>
  )
}

export default ItemSingle;