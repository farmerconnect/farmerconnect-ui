import CustomButton from '../../CustomButton';
import { Arrow } from '../../Icons';
import { IBreadcrumbProps } from './interfaces';
import { Container, Text } from './styles';

const Breadcrumb: React.FC<IBreadcrumbProps> = (props: IBreadcrumbProps) => {
  return (
    <Container>
      {props.isLast && <Text>{props.text}</Text>}
      {!props.isLast && (
        <CustomButton variant="text" onClick={props.onClick}>
          {props.text}
          <Arrow fill={'#00E394'} direction="right" />
        </CustomButton>
      )}
    </Container>
  );
};

export default Breadcrumb;
