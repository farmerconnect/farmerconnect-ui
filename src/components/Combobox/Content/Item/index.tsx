import React from 'react';
import { Container } from './styles';

interface IProps {
  content: any;
  handleSelected: any;
}

const Item: React.FC<IProps> = ({
  content,
  handleSelected,
  ...props
}) => {

  return (
    <Container onClick={() => handleSelected(content)}>
      <b>{content.name}</b>
      <p>Registered by: {content.information.registered}︱ID: {content.information.id}︱Company prefix: {content.information.companyPrefix} </p>
      <input type="checkbox" />
      <span className="checkmark"></span>
    </Container>
  )
}

export default Item;