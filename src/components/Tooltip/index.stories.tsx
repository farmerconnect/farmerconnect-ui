// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Fragment } from 'react';
import Tooltip from './';
import { ITooltipProps } from './interfaces';
import PublicProfileIcon from '../Icons/PublicProfile';
import CloseIcon from '../Icons/Close';
import ReactTooltip from 'react-tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta;

const Template: Story<ITooltipProps> = (args) => {
  return (
    <div
      style={{
        marginTop: '50px',
      }}
    >
      <PublicProfileIcon data-for={args.id} data-tip />
      <Tooltip {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  backgroundColor: '#192C28',
  textColor: '#F3F3F3',
  direction: 'right',
  effect: 'solid',
  content: 'See public profile',
  id: 'global',
};

const renderContent = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      maxWidth: '31.375rem'
    }}
  >
    <button
      onClick={() => ReactTooltip.hide()}
      style={{
        display: 'flex',
        cursor: 'pointer',
        width: '24px',
        alignSelf: 'flex-end',
        background: 'none',
        border: 'none',
        color: '#fff',
        position: 'absolute',
        top: '-3px',
        right: '-35px',
      }}
    >
      <CloseIcon fill={'#fff'}/>
    </button>
    <p>This is where you can find all of the participants in our ecosystem. For each of the companies in this directory, you can see the data that you have been entitled to. This is also where you can see important information about the headquarters of your own organization.</p>
  </div>
);

export const Clickable = Template.bind({});
Clickable.args = {
  backgroundColor: '#192C28',
  textColor: '#F3F3F3',
  direction: 'right',
  effect: 'solid',
  content: renderContent(),
  id: 'global',
  event: 'click',
  className: 'clickable'
};
