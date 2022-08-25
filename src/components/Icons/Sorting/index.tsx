import { farmerConnectTheme } from '../../Theme';
import { ISortingProps } from './interfaces';
import { StyledIcon } from './styles';

const Sorting = ({ fill, order, activeColor, defaultColor, inactiveColor, ...props }: ISortingProps) => {
  const getCurrentColors = () => {
    if (order === 'desc') return [activeColor, inactiveColor];

    if (order === 'asc') return [inactiveColor, activeColor];

    return [defaultColor, defaultColor];
  };

  const [topArrowColor, bottomArrowColor] = getCurrentColors();

  return (
    <StyledIcon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M11.5263 9.195C11.2663 8.935 10.8463 8.935 10.5863 9.195L7.99966 11.7817L5.41299 9.195C5.15299 8.935 4.73299 8.935 4.47299 9.195C4.21299 9.455 4.21299 9.875 4.47299 10.135L7.53299 13.195C7.79299 13.455 8.21299 13.455 8.47299 13.195L11.533 10.135C11.7863 9.88167 11.7863 9.455 11.5263 9.195Z"
        fill={topArrowColor}
      />
      <path
        d="M4.47392 6.19514C4.73392 6.45514 5.15392 6.45514 5.41392 6.19514L8.00058 3.60847L10.5873 6.19514C10.8473 6.45514 11.2673 6.45514 11.5273 6.19514C11.7873 5.93514 11.7873 5.51514 11.5273 5.25514L8.46725 2.19514C8.20725 1.93514 7.78725 1.93514 7.52725 2.19514L4.46725 5.25514C4.21392 5.50847 4.21392 5.93514 4.47392 6.19514Z"
        fill={bottomArrowColor}
      />
    </StyledIcon>
  );
};

Sorting.defaultProps = {
  fill: 'currentColor',
  activeColor: farmerConnectTheme.colors.fc_green,
  defaultColor: farmerConnectTheme.colors.fc_black_70,
  inactiveColor: farmerConnectTheme.colors.fc_black_30,
};

export default Sorting;
