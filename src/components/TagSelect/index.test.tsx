import { render, fireEvent } from '@testing-library/react';
import TagSelect from '.';

const tagOptions = [
  {
    id: 'GREEN',
    text: 'GREEN',
    color: '#005E3A',
    background: '#CEE9DD',
  },
  {
    id: 'YELLOW',
    text: 'YELLOW',
    color: '#AE8800',
    background: '#FFFCD5',
  },
  {
    id: 'RED',
    text: 'RED',
    color: '#FB2E4C',
    background: '#FFEAED',
  },
];

describe('TagSelect Component', () => {
  it('renders properly', () => {
    const container = render(<TagSelect selected={tagOptions[0]} options={tagOptions} />);
    expect(container.getByText(/green/i)).toBeInTheDocument();
  });

  it('shows options when clicking on the tag', () => {
    const container = render(<TagSelect selected={tagOptions[0]} options={tagOptions} />);
    expect(container.queryByText(/yellow/i)).not.toBeInTheDocument();
    expect(container.queryByText(/red/i)).not.toBeInTheDocument();
    fireEvent.click(container.getByText(/green/i));
    expect(container.getByText(/yellow/i)).toBeInTheDocument();
    expect(container.getByText(/red/i)).toBeInTheDocument();
  });

  it('fires onChange callback with the correct argument', () => {
    const onChange = jest.fn();
    const container = render(<TagSelect selected={tagOptions[0]} options={tagOptions} onChange={onChange} />);
    fireEvent.click(container.getByText(/green/i));
    fireEvent.click(container.getByText(/red/i));
    expect(onChange).toHaveBeenCalledWith({
      id: 'RED',
      text: 'RED',
      color: '#FB2E4C',
      background: '#FFEAED',
    });
  });
});
