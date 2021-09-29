// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { typographyVariantList, typographyColorList, typopgrahyFontStyleList, typographyTagList } from './interfaces';
import * as S from './styles.stories';

import Typography, { ITypographyProps } from '.';

export default {
  title: 'Typography',
  component: Typography,
  argTypes: {
    variant: {
      description:
        'Sets the styles required for the specified as determined by the farmer connect design library.',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: typographyVariantList,
      table: {
        type: { summary: 'TypographyVariant' },
        defaultValue: { summary: 'body' },
      }
    },
    color: {
      description:
        'Sets the color for the text. The colors are limited to the colors available in the design library. If no color is set, it will default to "fc_black_100".',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: typographyColorList,
      table: {
        type: { summary: 'TypographyColor' },
        defaultValue: { summary: 'fc_black_100' },
      }
    },
    fontStyle: {
      description:
        'Sets the fontStyle for the text, altering the font-weight and font-style.',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: typopgrahyFontStyleList,
      table: {
        type: { summary: 'TypographyFontStyle' },
        defaultValue: { summary: 'undefined' },
      }
    },
    tagName: {
      description:
        'Sets the tag for the text. If no tagName is set, the default will depend on the variant that has been applied.',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: typographyTagList,
      table: {
        type: { summary: 'TypographyTag' },
        defaultValue: { summary: 'p' },
      }
    },
  },
} as Meta;

const Template: Story<ITypographyProps> = (args) => (
  <Typography {...args}>The quick brown fox jumps over the lazy red dog.</Typography>
);

export const Default = Template.bind({});
Default.args = {};

export const Title1: Story = () => {
  return <Typography variant="title1">The quick brown fox jumps over the lazy red dog.</Typography>;
};

export const Title2: Story = () => {
  return <Typography variant="title2">The quick brown fox jumps over the lazy red dog.</Typography>;
};

export const Title3: Story = () => {
  return <Typography variant="title3">The quick brown fox jumps over the lazy red dog.</Typography>;
};

export const Title4: Story = () => {
  return <Typography variant="title4">The quick brown fox jumps over the lazy red dog.</Typography>;
};

export const Title5: Story = () => {
  return <Typography variant="title5">The quick brown fox jumps over the lazy red dog.</Typography>;
};

export const body: Story = () => {
  return (
    <S.Stack>
      <Typography variant="body">The quick brown fox jumps over the lazy red dog.</Typography>
      <Typography variant="body" fontStyle="semibold">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
      <Typography variant="body" fontStyle="highlight">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
    </S.Stack>
  );
};

export const small: Story = () => {
  return (
    <S.Stack>
      <Typography variant="small">The quick brown fox jumps over the lazy red dog.</Typography>
      <Typography variant="small" fontStyle="semibold">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
      <Typography variant="small" fontStyle="highlight">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
    </S.Stack>
  );
};


export const steplabel: Story = () => {
  return (
    <S.Stack>
      <Typography variant="steplabel">The quick brown fox jumps over the lazy red dog.</Typography>
      <Typography variant="steplabel" fontStyle="semibold">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
      <Typography variant="steplabel" fontStyle="highlight">
        The quick brown fox jumps over the lazy red dog.
      </Typography>
    </S.Stack>
  );
};
