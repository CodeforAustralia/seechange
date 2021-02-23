import { render } from '@testing-library/react';
import HomePage from './HomePage';

test('renders HomePage', () => {
  const { getByText } = render(<HomePage />);
  getByText('Kevin Rudd');
});
