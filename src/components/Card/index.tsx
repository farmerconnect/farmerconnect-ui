import Button from '../CustomButton';
import { Plus, Arrow } from '../Icons';
import { ICardProps } from './interfaces';
import * as S from './styles';

const Card = (props: ICardProps) => {
	return (
		<S.Container {...props}>
      <S.Header {...props}>
        <S.Title {...props}>
          {props.title}
        </S.Title>
        <S.Action {...props}>
        <Button variant='text' onClick={props.onAction}>
          {props.action}
          <Plus />
        </Button>
        </S.Action>
      </S.Header>
      <S.Content {...props}>
        {props.children}
      </S.Content>
      <S.Footer {...props}>
        <S.Expand {...props}>
          <Button variant='text' onClick={props.onCollapse}>
            {props.collapse}
            {props.collapseState === 'more' && (
              <Arrow width={'11'} height={'6'} direction={'down'} />
            )}
            {props.collapseState === 'less' && (
              <Arrow width={'11'} height={'6'} direction={'up'} />
            )}
          </Button>
        </S.Expand>
      </S.Footer>
		</S.Container>
	);
};

export default Card;