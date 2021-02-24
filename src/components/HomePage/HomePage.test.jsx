import { render } from '@testing-library/react';
import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('renders correct text', () => {
    const { getByText } = render(<HomePage />);
    getByText('Kevin Rudd');
  });
});
