import styled from 'styled-components';
import { BooleanLiteral } from 'typescript';
import activeImg from '../../assets/breadcrumb_active.svg';
import doneImg from '../../assets/breadcrumb_done.svg';
import undoneImg from '../../assets/breadcrumb_undone.svg';

interface IBreadcrumbTextProps {
  active?: boolean;
  done?: boolean;
}

interface IBreadcrumbIconProps {
  active?: boolean;
  done: boolean;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

interface IBreadcrumbIconLineProps {
  done?: boolean;
  visible?: boolean;
}

const fontFamily = `font-family: 'Red Hat Display', sans-serif;`;
export const Container = styled.div`
  ${fontFamily}
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  width: 15rem;
`;

export const Text = styled.span<IBreadcrumbTextProps>`
  color: ${(props) => props.active || props.done ? 'black' : 'rgba(20, 20, 20, 0.3)'};
  font-size: 0.8rem;
  font-weight: 500;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
`;

export const Icon = styled.div<IBreadcrumbIconProps>`
  background-image: url(${(props) => props.done ? doneImg : props.active ? activeImg : undoneImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1rem;
  width: 1rem;
`;

export const IconLine = styled.div<IBreadcrumbIconLineProps>`
  border-bottom: ${(props) => props.done ? '0.1rem solid #00E394' : '0.1rem solid rgba(20, 20, 20, 0.3)' }; 
  height: 0.45rem;
  width: 7rem;
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`;
