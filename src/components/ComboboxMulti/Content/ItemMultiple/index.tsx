import React from 'react';
import { Container, Label } from './styles';
import { IItemMultipleProps } from '../../interfaces';



const ItemMultiple: React.FC<IItemMultipleProps> = ({
  content,
  handleSelected,
  limitReached,
  ...props
}) => {

  return (
    <Container>
      <Label onChange={(e: any) => handleSelected(e, content)}>
        <b>ID: {content.id}</b>
        <p>Product id: {content.product_id}</p>
        <input type="checkbox"
          checked={content.checked}
          onChange={(e: any) => handleSelected(e, content)}
          disabled={limitReached && !content.checked}
        />
        <span className="checkmark"></span>
      </Label>
    </Container>
  )
}

export default ItemMultiple;