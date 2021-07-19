import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Arrow } from '../Icons';
import { IAccordionProps } from './interfaces';
import * as S from './styles';

const Accordion = ({ isOpen, children = null, heading = null, onToggle, ...props }: IAccordionProps) => {
  const [open, setOpen] = useState(isOpen);

  const handleToggleOpen = () => {
    onToggle?.(!open);
    setOpen(!open);
  };

  useEffect(() => {
    if (isOpen !== undefined) setOpen(isOpen);
  }, [isOpen, open]);

  return (
    <S.Container isOpen={open} {...props}>
      <header onClick={handleToggleOpen}>
        <Arrow activeColor="#141414" />
        {heading}
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.1 }}
            style={{ overflow: 'hidden' }}
          >
            <main>{children}</main>
          </motion.div>
        )}
      </AnimatePresence>
    </S.Container>
  );
};

export default Accordion;
