import react from 'react';
import { Container } from './styles';
import Breadcrumb from './Breadcrumb';
import { IBreadcrumbsProps } from './interfaces';

const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props: IBreadcrumbsProps) => {
  let foundActive = false;

  return (
    <Container>
      {props.breadcrumbs.map((breadcrumb, index) => {
        foundActive = foundActive || breadcrumb.active;
        return <Breadcrumb
          key={index}
          active={breadcrumb.active}
          done={!foundActive}
          text={breadcrumb.text}
          hasPrevious={index > 0}
          hasNext={index < props.breadcrumbs.length - 1}
          doneColor={props.doneColor}
          undoneColor={props.undoneColor}
          titleColor={props.titleColor}
        />
      })}
    </Container>
  )
};

export default Breadcrumbs;
