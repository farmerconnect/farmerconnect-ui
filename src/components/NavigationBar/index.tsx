import React from 'react';
import { INavigationBarProps } from './interfaces';
import { Container, Button, NextButtonContainer, PreviousButtonContainer } from './styles';

const NavigationBar: React.FC<INavigationBarProps> = (
  props: INavigationBarProps
) => {
  return (
    <Container {...props}>
      <PreviousButtonContainer>
        {props.previousButton ? (
          <Button {...{ backgroundColor: props.backgroundColor, color: props.color, disabledColor: props.disabledColor, customStyles: props.previousButton?.customStyles }}
                  {...props.previousButton}>{props.previousButton?.children}</Button>
        ) : (
          <></>
        )}
      </PreviousButtonContainer>
      <NextButtonContainer>
        {props.nextButton ? (
          <Button {...{ backgroundColor: props.backgroundColor, color: props.color, disabledColor: props.disabledColor, customStyles: props.nextButton?.customStyles }}
                  {...props.nextButton}>{props.nextButton?.children}</Button>
        ) : (
          <></>
        )}
      </NextButtonContainer>
    </Container>
  )
};

export default NavigationBar;
