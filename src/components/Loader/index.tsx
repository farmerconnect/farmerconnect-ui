import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { ILoaderProps } from './interfaces';
import Caution from '../Icons/Caution';
import { Button, Content, Message, Spinner, Container, SpinnerItem, SpinnerItemList } from './styles';

const Loader = ({
  show,
  options,
  iconSize,
  iconColor,
  buttonText,
  errorOptions,
  onButtonClick,
  ...props
}: ILoaderProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const option = useMemo(() => options && options[currentIndex], [options, currentIndex]);

  useEffect(() => {
    if (currentIndex !== 0 && !show) setCurrentIndex(0);
  }, [currentIndex, show]);

  useEffect(() => {
    if (!options?.length || !show) return;

    let timeout: ReturnType<typeof setTimeout>;
    const hasNextElement = currentIndex < options.length - 1;

    if (option && option.duration && hasNextElement) {
      timeout = setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
      }, option.duration * 1000);
    }

    return () => timeout && clearTimeout(timeout);
  }, [currentIndex, option, options, show]);

  const renderSpinner = useCallback(
    () => (
      <Spinner iconSize={iconSize}>
        <SpinnerItemList>
          {Array(9)
            .fill('')
            .map((_, index: number) => (
              <SpinnerItem key={index} iconSize={iconSize} iconColor={iconColor} />
            ))}
        </SpinnerItemList>
      </Spinner>
    ),
    [iconColor, iconSize]
  );

  const renderMessage = useCallback(() => (option ? <Message>{option?.message}</Message> : null), [option]);

  const renderError = useCallback(() => {
    return (
      <Fragment>
        <Caution />
        <Message className="error">{errorOptions?.message}</Message>
      </Fragment>
    );
  }, [errorOptions]);

  return (
    <Container show={show} {...props}>
      <Content>
        {errorOptions?.error ? renderError() : renderSpinner()}
        {errorOptions?.error ? '' : renderMessage()}
        {onButtonClick && buttonText && <Button onClick={onButtonClick}>{buttonText}</Button>}
      </Content>
    </Container>
  );
};

Loader.defaultProps = {
  show: false,
};

export default Loader;
