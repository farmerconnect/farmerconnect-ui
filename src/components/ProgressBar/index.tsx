import { IProgressBar } from './interfaces';
import * as S from './styles';

const ProgressBar = ({ backgroundColor, completed, height, trackColor, ...props }: IProgressBar) => {
  return (
    <S.Container height={height} trackColor={trackColor}>
      <S.Filler backgroundColor={backgroundColor} completed={completed} {...props} />
    </S.Container>
  );
};

export default ProgressBar;
