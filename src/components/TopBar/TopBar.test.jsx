import { render } from '@testing-library/react';
import TopBar from './TopBar';

test('renders TopBar', () => {
  const { getByText } = render(<TopBar />);
  getByText('SeeChange.');
});
