import styled from 'styled-components';
import { IBreadcrumb, IBreadcrumbBarProps, IBreadcrumbLineProps, IBreadcrumbProps } from './interfaces';

export const breadcrumbDefaultStyles: IBreadcrumb = {
  colors: {
      primary: '#000000',
      secondary: '#00E394',
      tertiary: '#B9B9B9'
  }
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

export const Text = styled.span<IBreadcrumbProps>`
  color: ${(props) => props.active || props.done
    ? props.titleColor || props.theme?.breadcrumb?.colors?.primary || breadcrumbDefaultStyles.colors.primary
    : props.undoneColor || props.theme?.breadcrumb?.colors?.tertiary || breadcrumbDefaultStyles.colors.tertiary
  };
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

export const Icon = styled.div<IBreadcrumbBarProps>`
  background-color: ${(props) => props.done
    ? props.doneColor || props.theme?.breadcrumb?.colors?.secondary || breadcrumbDefaultStyles.colors.secondary
    : ''
  };
  border: 0.1rem solid ${(props) => props.active || props.done
    ? props.doneColor || props.theme?.breadcrumb?.colors?.secondary || breadcrumbDefaultStyles.colors.secondary
    : props.undoneColor || props.theme?.breadcrumb?.colors?.tertiary || breadcrumbDefaultStyles.colors.tertiary
  };
  border-radius: 0.28rem;
  height: 0.8rem;
  width: 0.8rem;
  -ms-transform: rotate(45deg); /* IE 9 */
  transform: rotate(45deg);
`;

export const IconLine = styled.div<IBreadcrumbLineProps>`
  border-bottom: 0.1rem solid ${(props) => props.done
    ? props.doneColor || props.theme?.breadcrumb?.colors?.secondary || breadcrumbDefaultStyles.colors.secondary
    : props.undoneColor || props.theme?.breadcrumb?.colors?.tertiary || breadcrumbDefaultStyles.colors.tertiary
  }; 
  height: 0.45rem;
  width: 7rem;
  visibility: ${(props) => props.visible ? 'visible' : 'hidden'};
`;
