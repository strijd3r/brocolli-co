import { render, screen } from '@testing-library/react';
import 'jest-styled-components'

import { Header } from './header';

test('renders div and its children', () => {
  const header = "testing react header"
  const { container } = render(<Header>{header}</Header>);
  expect(container.firstChild).toMatchSnapshot()

  const headerEl = screen.getByText(header);
  expect(headerEl).toBeInTheDocument();
});
