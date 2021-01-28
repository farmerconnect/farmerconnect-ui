import react from 'react';
import { IBreadcrumbProps } from './interfaces';
import { Container, Icon, IconContainer, IconLine, Text } from './styles';

const Breadcrumb: React.FC<IBreadcrumbProps> = (props: IBreadcrumbProps) => {
  return (
    <Container>
      <Text active={props.active} done={props.done}>{props.text}</Text>
      <IconContainer>
        <IconLine done={props.done || props.active} visible={props.hasPrevious} />
        <Icon active={props.active} done={props.done} hasNext={props.hasNext} hasPrevious={props.hasPrevious} />
        <IconLine done={props.done} visible={props.hasNext} />
      </IconContainer>
    </Container>
  )
};

export default Breadcrumb;
