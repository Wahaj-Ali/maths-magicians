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