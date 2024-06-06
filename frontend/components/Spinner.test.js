// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('spinner does not render when off', () => {
  const { container } = render(<Spinner on={false} />);
  expect(container.querySelector('#spinner')).toBeNull();
});

test('spinner renders when on', () => {
  const { container } = render(<Spinner on={true} />);
  expect(container.querySelector('#spinner')).not.toBeNull();
  expect(container.querySelector('#spinner').textContent).toContain('Please wait...');
});


