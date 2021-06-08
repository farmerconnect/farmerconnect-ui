import { shallow } from 'enzyme';
import Tag from './';

describe('Tag component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Tag>Test</Tag>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the function correctly', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Tag onClick={fn}>Test</Tag>);

    wrapper.simulate('click');

    expect(fn).toHaveBeenCalled();
  });
});
