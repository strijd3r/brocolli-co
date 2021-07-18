import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import { Body } from './body';

test('renders div and its children', () => {
  const body = 'testing react body';

  const { container } = render(<Body>{body}</Body>);
  expect(container.firstChild).toMatchSnapshot();

  const bodyEl = screen.getByText(body);
  expect(bodyEl).toBeInTheDocument();
});
