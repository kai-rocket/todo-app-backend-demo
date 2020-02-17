import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders add todo button', () => {
  const { getByText } = render(<App />);
  const addTodoButton = getByText(/add todo/i);
  expect(addTodoButton).toBeInTheDocument();
});
