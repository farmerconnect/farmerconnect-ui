import React from 'react';
import { shallow } from 'enzyme';
import Button from './'

describe('Button component', () => {
  test('it matches the snapshot', () => {
    const container = shallow(<Button>Test</Button>);
    expect(container).toMatchSnapshot();
  });
});
