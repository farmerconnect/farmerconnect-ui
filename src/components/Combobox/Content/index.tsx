import React, { Fragment } from 'react';
import { Container } from './styles';
import Item from './Item';

interface IProps {
  open: boolean;
  content: any;
  itemSelect: any;
}

const Content: React.FC<IProps> = ({
  open,
  content,
  itemSelect,
  ...props
}) => {

  return (
    <Fragment>
      {
        open && 
        <Container>
          {
            content.map((item:any, index:number) => (
              <Item
                key={index}
                content={item}
                handleSelected={itemSelect}
              />
            ))
          }
        </Container>
      }
    </Fragment>
  )
}

export default Content;
