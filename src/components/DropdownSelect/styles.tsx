import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';
import Checkbox from '../Checkbox';
import CustomButton from '../CustomButton';
import { customScrollbar } from '../../mixins/ScrollBar';
import { farmerConnectTheme } from '../Theme';

export const Wrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 264px;
  box-shadow: 0.125rem 0.125rem 0 0 ${farmerConnectTheme.colors.fc_green};
  border-radius: 0.75rem;
  background-color: ${farmerConnectTheme.colors.fc_white};
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.0625rem;
  color: ${farmerConnectTheme.colors.fc_black_100};
  transition: all 0.05s ease-out;
  font-weight: 700;
  padding: 1rem 1rem 0rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 28.5rem;
  height: auto;
  overflow: hidden;
  transition: all 0.05s ease-out;
`;

export const ContentText = styled.p`
  font-size: 0.875rem;
  color: ${farmerConnectTheme.colors.fc_black_100};
  padding: 0rem 1rem;
  margin: 0rem;
`;

export const FilterInputWrapper = styled.div`
  color: ${farmerConnectTheme.colors.fc_black_70};
  padding: 1rem 1rem 0.5rem;
  display: block;

  > div {
    position: relative;
    max-width: 17rem;

    > input {
      border: 1px solid ${farmerConnectTheme.colors.fc_black_30};
      width: 100%;
      box-sizing: border-box;
      border-radius: 0.75rem;
      font-size: 0.6875rem;
      background: transparent;
      padding: 0.5rem 4rem 0.5rem 0.75rem;
      outline: none;
      color: ${farmerConnectTheme.colors.fc_black_100};
      font-weight: 700;

      &::placeholder {
        color: ${farmerConnectTheme.colors.fc_black_70};
      }
    }

    > svg {
      position: absolute;
      top: 50%;
      right: 0.75rem;
      transform: translateY(-50%);
    }

    > button {
      position: absolute;
      display: flex;
      align-items: center;
      top: 50%;
      right: 0.25rem;
      background: transparent;
      border: none;
      outline: none;
      padding: 0.5rem;
      cursor: pointer;
      transform: translateY(-50%);

      > svg {
        transform: scale(0.6);
      }
    }
  }
`;

export const ListWrapper = styled.div`
  padding: 0 0rem 0rem 1rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  max-height: 314px;
  height: auto;

  ${customScrollbar({ trackBackgroundColor: farmerConnectTheme.colors.fc_black_10 })}
`;

export const ButtonContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-evenly;
`;

export const EmptyMessage = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: ${farmerConnectTheme.colors.fc_black_100};
  font-size: 0.6875rem;
  margin-right: 1rem;
`;

export const CustomCheckbox = styled(Checkbox)`
  font-weight: ${(props) => (props.checked ? '500' : '400')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  ${(props) =>
    props.disabled
      ? css`
          input + .unchecked,
          input + .checked,
          input:checked + svg + .unchecked,
          input:checked + .checked,
          input:checked + .checked {
            display: none;
          }
        `
      : ''}
`;

export const CustomizedButton = styled(CustomButton)`
  color: ${farmerConnectTheme.colors.fc_black_70};

  &:hover:not(:disabled) {
    color: ${farmerConnectTheme.colors.fc_grey};
  }
`;

export const Close = styled.div`
  cursor: pointer;
`;

interface IDragProps {
  isDragging: boolean;
}

export const ContainerDrag = styled.div<IDragProps>`
  display: flex;
  margin-right: 0.4rem;
  padding: 0px 0px 0px 0.4rem;
  border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
  background: ${({ isDragging }) =>
    isDragging ? farmerConnectTheme.colors.fc_black_10 : farmerConnectTheme.colors.fc_white};
  &:last-child {
    border-bottom: 1px solid ${farmerConnectTheme.colors.fc_black_10};
  }
  label {
    margin-left: 0;
    gap: 0.5rem;
    padding: 0.3125rem 0rem;
    align-items: flex-start;
  }
`;

export const CollapsableItem = styled.h3`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 0.6875rem !important;
  font-weight: 700;
  color: ${farmerConnectTheme.colors.fc_black_100};
  cursor: pointer;
  margin: 0;
  padding: 0.3125rem 0;

  &:not(.open) {
    > svg {
      transform: rotate(-90deg);
    }
  }

  > svg {
    margin-left: 0.25rem;
    transition: transform 0.1s ease-out;
  }
`;

export const AccordionContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  > label {
    display: flex;
    padding-left: 2rem;
    border-top: 1px solid ${farmerConnectTheme.colors.fc_black_10};
    > span {
      padding-top: 0.25rem;
      line-height: 1.3;
    }
  }
`;

export const DraggableHandle = styled.div`
  color: ${farmerConnectTheme.colors.fc_black_30};

  > svg {
    margin-right: 0.75rem;
    margin-top: 0.65rem;
  }
`;
