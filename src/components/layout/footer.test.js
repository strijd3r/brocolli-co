import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import 'jest-styled-components';

test('renders div and its children', () => {
  const footer = 'testing react footer';
  const { container } = render(<Footer>{footer}</Footer>);
  expect(container.firstChild).toMatchSnapshot();

  const footerEl = screen.getByText(footer);
  expect(footerEl).toBeInTheDocument();
});
