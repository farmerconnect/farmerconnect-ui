// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Card from '.';
import CustomButton from '../CustomButton';
import { ICardProps } from './interfaces';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Default', 'Main'],
    },
  },
} as Meta;

const Template: Story<ICardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Heading>Heading</Card.Heading>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
      libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium libero
      ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium libero
      ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
      <Card.Collapsed>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
      </Card.Collapsed>
    </Card>
  );
};

const Template2: Story<ICardProps> = (args) => {
  return (
    <Card {...args}>
      <Card.Heading>Heading</Card.Heading>
      <Card.Controls>
        <CustomButton variant="link" style={{ padding: '0.5rem 1rem' }}>
          Action
        </CustomButton>
        <CustomButton variant="link" style={{ padding: '0.5rem 1rem' }}>
          Buttons
        </CustomButton>
      </Card.Controls>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
      libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus. Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium libero
      ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus. Lorem ipsum
      dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium libero
      ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
      <Card.Collapsed>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam quisquam eius eveniet necessitatibus accusantium
        libero ducimus suscipit omnis aspernatur unde ut odit iusto nisi voluptas, nihil asperiores et id possimus.
      </Card.Collapsed>
    </Card>
  );
};

export const Default = Template.bind({});
Default.args = { type: 'Default' };

export const WithActionButton = Template2.bind({});
WithActionButton.storyName = 'With Action Buttons';
WithActionButton.args = { type: 'Default' };

export const Main = Template.bind({});
Main.args = { type: 'Main' };
