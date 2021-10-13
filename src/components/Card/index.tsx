import React, { createContext, useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as S from './styles';
import { ICardProps, ICollapsedProps } from './interfaces';
import { Arrow } from '../Icons';

const CardContext = createContext<[boolean, Function]>([false, () => {}]);

function Card({ type = 'Default', ...props }: ICardProps) {
  const [open, setOpen] = useState(false);

  return (
    <CardContext.Provider value={[open, setOpen]}>
      <S.Container type={type} isOpen={open} {...props} />
    </CardContext.Provider>
  );
}

const Collapsed = ({
  text = { seeMore: 'See more', seeLess: 'See less' },
  onOpenClose = () => {},
  children,
  ...props
}: ICollapsedProps) => {
  const [open, setOpen] = useContext(CardContext);

  const onOpen = (open: boolean) => {
    setOpen(open);
    onOpenClose(open);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            animate={{ height: 'auto', overflow: 'hidden' }}
            initial={{ height: 0, overflow: 'hidden' }}
            exit={{ height: 0, overflow: 'hidden' }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <S.CollapseButtonContainer>
        <S.SeeMoreButton variant="text" onClick={() => onOpen(!open)}>
          {open ? text.seeLess : text.seeMore}
          <Arrow direction={open ? 'up' : 'down'} />
        </S.SeeMoreButton>
      </S.CollapseButtonContainer>
    </>
  );
};
Card.Collapsed = Collapsed;
Card.Heading = S.Heading;
Card.Controls = S.CardControls;

export default Card;
