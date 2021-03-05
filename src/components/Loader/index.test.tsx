import React from 'react';
import { shallow } from 'enzyme';
import Loader from './';
import { Button } from './styles';

describe('Loader component', () => {
  const defaultProps = {
    show: false,
    options: [
      {
        duration: 2,
        message:
          'We are working on your request, please bare with us for a moment...',
      },
      {
        duration: 2,
        message: '...just a little bit longer',
      },
      {
        duration: 2,
        message: '...almost there',
      },
    ],
    buttonText: 'Cancel request',
    onButtonClick: jest.fn(),
  };

  it('should match the snapshot - hidden', () => {
    const wrapper = shallow(<Loader {...defaultProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot - visible', () => {
    const wrapper = shallow(<Loader {...defaultProps} show />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the spy function', () => {
    const wrapper = shallow(<Loader {...defaultProps} show />);
    expect(wrapper.find(Button).text()).toBe(defaultProps.buttonText);

    wrapper.find(Button).simulate('click');
    expect(defaultProps.onButtonClick).toHaveBeenCalled();
  });
});
