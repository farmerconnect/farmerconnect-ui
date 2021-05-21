// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Col from '.';
import Row from '../Row';
import Container from '../Container';
import { IColProps } from './interfaces';

const Content = () => (
  <div
    style={{
      height: '10vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      backgroundColor: '#00e394',
      borderRadius: '16px',
    }}
  >
    Content
  </div>
);

export default {
  title: 'Col',
  component: Col,
  argTypes: {},
  args: {
    xs: 0,
    sm: 12,
    md: 6,
    lg: 3,
    xl: 2,
    xxl: 1,
  },
} as Meta;

const Template: Story<IColProps> = (args) => (
  <Container style={{ backgroundColor: 'lightgray' }}>
    <Row bottom={16}>
      <Col {...args}>
        <Content />
      </Col>
    </Row>
    <Row bottom={16}>
      <Col {...args}>
        <Content />
      </Col>
    </Row>
    <Row bottom={16}>
      <Col {...args}>
        <Content />
      </Col>
    </Row>
  </Container>
);

export const Default = Template.bind({});
