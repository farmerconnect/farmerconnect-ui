import { render, screen } from '@testing-library/react';

import Typography, { ITypographyProps } from '.';
import { typographyTagList } from './interfaces';

const variantShouldRenderA = (variant: ITypographyProps['variant'], tagName: ITypographyProps['tagName']) => {
  it(`${variant} should render a ${tagName}`, async () => {
    render(<Typography variant={variant}>text</Typography>);
    const text = await screen.queryByText('text');
    expect(text?.tagName).toBe(tagName?.toUpperCase());
  });
};

describe('Typography', () => {
  it('should render', () => {
    render(<Typography></Typography>);
    expect(true).toBe(true);
  });

  describe('variants', () => {
    Array(5)
      .fill(undefined)
      .forEach((_, i) => {
        const headerLevel = i + 1;
        const titleVariant = `title${headerLevel}` as ITypographyProps['variant'];
        const tagName = `h${headerLevel}` as ITypographyProps['tagName'];
        variantShouldRenderA(titleVariant, tagName);
      });

    variantShouldRenderA('body', 'p');
    variantShouldRenderA('small', 'p');
  });

  describe('tagNames', () => {
    typographyTagList.forEach((tagName) => {
      it(`should render a ${tagName} when passed in tagName`, async () => {
        render(<Typography tagName={tagName}>text</Typography>);
        const text = await screen.queryByText('text');
        expect(text?.tagName).toBe(tagName?.toUpperCase());
      });
    });
  });
});
