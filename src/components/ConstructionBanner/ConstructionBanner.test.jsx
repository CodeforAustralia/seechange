import { render } from '@testing-library/react';
import ConstructionBanner from './ConstructionBanner';

describe('<ConstructionBanner />', () => {
  it('renders correct text', () => {
    const { getByText } = render(<ConstructionBanner />);
    getByText('please follow this link.');
  });
});
