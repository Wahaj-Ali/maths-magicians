import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Check if it', () => {
  it('renders Home component', () => {
    render(<Home />);
  });
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
