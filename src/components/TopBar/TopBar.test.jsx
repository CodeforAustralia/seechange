import { render } from '@testing-library/react';
import TopBar from './TopBar';

describe('<TopBar />', () => {
  it('renders correct text', () => {
    const { getByText } = render(<TopBar />);
    getByText('SeeChange.');
  });
});
