// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
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
  content: 'See public profile',
  id: 'global',
  direction: 'top',
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
      onClick={Tooltip.Hide}
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
        right: '-24px',
      }}
    >
      <CloseIcon fill={'#fff'}/>
    </button>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere nulla eget nisl lobortis aliquam. Morbi vehicula dapibus nisi, eleifend mattis leo convallis vel. Aenean neque erat, viverra sed lobortis eu, pretium et velit. Proin neque urna, mollis in dictum vel, ornare non est. Proin egestas accumsan diam non bibendum.</p>
  </div>
);

export const Clickable = Template.bind({});
Clickable.args = {
  content: renderContent(),
  id: 'global',
  event: 'click',
  className: 'clickable'
};
