import React, { Component } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import logo from './header.logo.svg';

/**
 * HeaderComponent
 * @param {object} props HeaderComponent properties
 * @param {string} props.children Children
 * @param {string} props.className Classname
 * @returns
 */
function HeaderComponent({ children, className }) {
  return (
    <header className={className}>
      <Logo src={logo} />
      {children}
    </header>
  );
}

/**
 * Logo is a styled image with a default height
 */
export const Logo = styled.img`
  height: 4rem;
`;

Logo.defaultProps = {
  src: logo,
};

/**
 * Header is a styled version of the HeaderComponent.
 * @type {Component}
 */
export const Header = styled(HeaderComponent)`
  height: 4rem;
  background: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => darken(0.1, props.theme.primaryBg)};
  box-shadow: 5px 5px 0 ${(props) => darken(0.1, props.theme.primaryBg)};
`;

Header.defaultProps = {
  theme: {
    primary: '#000000',
    primaryBg: '#FFFFFF',
  },
};
