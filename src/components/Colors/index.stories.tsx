// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { farmerConnectTheme } from '../Theme';
import * as S from './styles.stories';

import ColorSwatch, { IColorSwatch } from '.';

export default {
  title: 'Colors',
  component: ColorSwatch,
  parameters: {
    controls: {
      disabled: true,
    },
    actions: {
      disabled: true,
    }
  }
} as Meta;

const Template: Story<IColorSwatch> = () => {
  return (
    <S.Container>
      {Object.entries(farmerConnectTheme.colors).map(([colorName, color]) => {
        return <ColorSwatch colorName={colorName} color={color}></ColorSwatch>;
      })}
    </S.Container>
  );
};

export const Default = Template.bind({});
Default.args = {};
