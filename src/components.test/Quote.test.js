import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

describe('Check if it', () => {
  it('renders Quote component', () => {
    render(<Quote />);
  });
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
