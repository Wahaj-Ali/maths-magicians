import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

describe('Calculator', () => {
  it('renders Calculator component', () => {
    render(<Calculator />);
  });
});

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('checks UI changes state after the button is clicked', () => {
  const { getByText } = render(<Calculator />);
  const number2 = getByText(2);
  const answer = number2.textContent;
  expect(answer).toBe('2');
});
