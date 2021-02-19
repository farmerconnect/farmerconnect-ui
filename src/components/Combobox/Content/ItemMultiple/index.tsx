import React from 'react';
import { Container, Label } from './styles';

interface IProps {
  content: any;
  handleSelected: any;
}

const ItemMultiple: React.FC<IProps> = ({
  content,
  handleSelected,
  ...props
}) => {

  return (
    <Container>
      <Label onChange={(e: any) => handleSelected(e, content)}>
        <b>{content.name}</b>
        <p>Registered by: {content.information.registered}︱ID: {content.information.id}︱Company prefix: {content.information.companyPrefix} </p>
        <input type="checkbox" checked={content.checked} />
        <span className="checkmark"></span>
      </Label>
    </Container>
  )
}

export default ItemMultiple;