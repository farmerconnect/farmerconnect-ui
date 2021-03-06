import { FC } from 'react';
import { ITooltipProps } from './interfaces';
import ReactTooltip from 'react-tooltip';
import { Container } from './styles';

const Tooltip: FC<ITooltipProps> = ({
  direction = 'right',
  effect = 'solid',
  className,
  backgroundColor = '#192C28',
  textColor = '#F3F3F3',
  arrowColor,
  content,
  id,
  event,
  offset,
  delayShow,
  delayHide,
  multiline = false,
  ...props
}) => {
  const clickable = !!event && event === 'click' ? true : false;
  const classnames = !!className ? `themed ${className}` : `themed`;
  let newContent;
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
        delayShow={delayShow}
        delayHide={delayHide}
        multiline={multiline}
        getContent={(dataTip) => {
          newContent = content;
          if (dataTip !== null && dataTip !== 'true') {
            newContent = dataTip;
          }
          return newContent;
        }}
        {...props}
      >
        {newContent}
      </ReactTooltip>
    </Container>
  );
};

export default Object.assign(Tooltip, {
  hide: () => ReactTooltip.hide(),
  rebuild: () => ReactTooltip.rebuild(),
});
