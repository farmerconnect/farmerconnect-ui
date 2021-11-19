import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../../styles/colors';

export const Overlay = styled(motion.div)`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(20, 20, 20, 0.6);
  z-index: 101;
`;

export const Container = styled(motion.div)`
  position: relative;
  background-color: white;
  padding: 2.25rem;
  border-radius: 0.75rem;
`;

export const CloseButton = styled.button`
  position: absolute;
  padding: 0.5rem;
  top: 0.75rem;
  right: 0.75rem;
  outline: none;
  border: none;
  color: ${colors.fc_black_70};
  transition: all 0.1s ease-out;
  min-height: auto;
  background-color: transparent;
  cursor: pointer;
  color: ${colors.fc_black_70};
  &:hover,
  &:focus {
    color: ${colors.fc_black_100};
  }
`;
