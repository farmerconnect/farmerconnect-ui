import { IProgressBar } from './interfaces';

import * as S from './styles';

const ProgressBar = ({ backgroundColor, completed, ...props }: IProgressBar) => {
  return (
    <S.Container>
      <S.Filler backgroundColor={backgroundColor} completed={completed} />
    </S.Container>
  );
};

export default ProgressBar;
