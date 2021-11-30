import { shallow } from 'enzyme';
import Range from './';

describe('Range component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Range />);
    expect(wrapper).toMatchSnapshot();
  });
});
