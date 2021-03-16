import React from 'react';
import { Container, Label } from './styles';
import { IItemMultipleProps } from '../../interfaces';



const ItemMultiple: React.FC<IItemMultipleProps> = ({
  content,
  handleSelected,
  limitReached,
  contentRender,
  ...props
}) => {

  const disabled = limitReached && !content.checked;

  return (
    <Container>
      <Label onChange={(e: any) => handleSelected(e, content)} className={`${disabled ? 'disabled' : ""}`}>
        {contentRender}
        <input type="checkbox"
          checked={content.checked}
          onChange={(e: any) => handleSelected(e, content)}
          disabled={disabled}
        />
        <span className="checkmark"></span>
      </Label>
    </Container>
  )
}

export default ItemMultiple;