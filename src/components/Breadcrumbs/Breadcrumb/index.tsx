import react from 'react';
import { IBreadcrumbProps } from './interfaces';
import { Container, Icon, IconContainer, IconLine, Text } from './styles';

const Breadcrumb: React.FC<IBreadcrumbProps> = (props: IBreadcrumbProps) => {
  return (
    <Container>
      <Text {...props}>{props.text}</Text>
      <IconContainer>
        <IconLine done={props.active || props.done} visible={props.hasPrevious} />
        <Icon {...props} />
        <IconLine {...props} visible={props.hasNext} />
      </IconContainer>
    </Container>
  )
};

export default Breadcrumb;
