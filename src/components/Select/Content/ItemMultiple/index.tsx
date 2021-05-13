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
        <div>
          {contentRender}
        </div>
        <div>
          <input type="checkbox"
            checked={content.checked}
            onChange={(e: any) => handleSelected(e, content)}
            disabled={disabled}
          />
          <span className="checkmark"></span>
        </div>
      </Label>
    </Container>
  )
}

export default ItemMultiple;