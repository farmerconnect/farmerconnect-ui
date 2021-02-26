import styled from 'styled-components';
import { INavigationBar, INavigationBarProps } from './interfaces';

export const navigationBarDefaultStyles: INavigationBar = {
  colors: {
      primary: 'rgba(112, 163, 140, 0.2)',
      secondary: '#141414',
      tertiary: 'rgba(20, 20, 20, 0.3)'
  }
}

export const Container = styled.div<INavigationBarProps>`
  background: ${(props) => props.backgroundColor || props.theme?.navigationBar?.colors?.primary || navigationBarDefaultStyles.colors.primary};
  display: flex;
  flex-direction: row;
  height: 4rem;
  width: 100%;

  ${props => props.customStyles}
`;

export const Button = styled.button<INavigationBarProps>`
  background: none;
  border: 0.01rem solid ${(props) => props.color || props.theme?.navigationBar?.colors?.secondary || navigationBarDefaultStyles.colors.secondary};
  border-radius: 0.6rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.8rem;
  min-width: 7rem;
  outline: none;

  &:disabled {
    border-color: ${(props) => props.disabledColor || props.theme?.navigationBar?.colors?.tertiary || navigationBarDefaultStyles.colors.tertiary};
    color: ${(props) => props.disabledColor || props.theme?.navigationBar?.colors?.tertiary || navigationBarDefaultStyles.colors.tertiary};
  }

  ${props => props.customStyles}
`;

export const PreviousButtonContainer = styled.div`
  align-self: center;
  flex-grow: 1;
  padding-left: 2.5rem;
`;

export const NextButtonContainer = styled.div`
  align-self: center;
  padding-right: 2.5rem;
`;
