import { render, screen } from '@testing-library/react';
import 'jest-styled-components'

import { Application } from './application';

test('renders div and its children', () => {
  const body = "testing react body"

  const { container } = render(<Application>{body}</Application>);
  expect(container.firstChild).toMatchSnapshot()

  const bodyEl = screen.getByText(body);
  expect(bodyEl).toBeInTheDocument();
});
