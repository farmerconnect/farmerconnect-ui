import { FC } from 'react';
import { ITooltipProps } from './interfaces';
import ReactTooltip from 'react-tooltip';
import { Container } from './styles';

const Tooltip: FC<ITooltipProps> = ({
  direction,
  effect,
  className,
  backgroundColor,
  textColor,
  arrowColor,
  content,
  id,
  event,
  offset,
  ...props
}) => {
  const clickable = !!event && event === 'click' ? true : false;
  const classnames = !!className ? `themed ${className}` : `themed`;
  return (
    <Container>
      <ReactTooltip
        place={direction}
        effect={effect}
        className={classnames}
        backgroundColor={backgroundColor}
        textColor={textColor}
        arrowColor={arrowColor}
        id={id}
        event={event}
        clickable={clickable}
        offset={offset}
      >
        {content}
      </ReactTooltip>
    </Container>
  );
};
export default Tooltip;
