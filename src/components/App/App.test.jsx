import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

jest.mock('../TopBar/TopBar', () => () => <p>top bar</p>);
jest.mock('../HomePage/HomePage', () => () => <p>home page</p>);

describe('<App />', () => {
  it('renders correct child components', () => {
    const { getByText } = render(<App />);
    getByText('top bar');
    getByText('home page');
  });
});
