import { css } from 'styled-components';

interface ICustomScrollbar {
  size?: string;
  trackBackgroundColor?: string;
  thumbBackgroundColor?: string;
}

export const customScrollbar = ({
  size = '12px',
  trackBackgroundColor = '#F3F3F3',
  thumbBackgroundColor = '#b9b9b9',
}: ICustomScrollbar = {}) => css`
  &::-webkit-scrollbar {
    width: ${size};
    height: ${size};
  }

  &::-webkit-scrollbar-track {
    background-color: ${trackBackgroundColor};
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid ${trackBackgroundColor};
    border-radius: 6px;
    background-color: ${thumbBackgroundColor};
  }
`;
