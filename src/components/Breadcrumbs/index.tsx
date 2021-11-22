import { Container } from './styles';
import Breadcrumb from './Breadcrumb';
import { IBreadcrumbsProps } from './interfaces';

const Breadcrumbs: React.FC<IBreadcrumbsProps> = (props: IBreadcrumbsProps) => {
  return (
    <Container>
      {props.breadcrumbs.map((breadcrumb, index) => {
        return (
          <Breadcrumb
            key={index}
            text={breadcrumb.text}
            isLast={index === props.breadcrumbs.length - 1}
            onClick={breadcrumb.onClick}
          />
        );
      })}
    </Container>
  );
};

export default Breadcrumbs;
