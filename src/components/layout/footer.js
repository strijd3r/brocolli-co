import React, { Component } from 'react';
import { darken } from 'polished';
import styled from 'styled-components';

/**
 * FooterComponent
 * @param {object} props FooterComponent properties
 * @param {string} props.children Children
 * @param {string} props.className Classname
 * @returns
 */
function FooterComponent({ children, className }) {
  return <footer className={className}>{children}</footer>;
}

/**
 * Footer is a styled version of the FooterComponent.
 * @type {Component}
 */
export const Footer = styled(FooterComponent)`
  height: 4rem;
  background: ${(props) => props.theme.primaryBg};
  color: ${(props) => props.theme.primary};
  box-shadow: 5px 5px 0 ${(props) => darken(0.1, props.theme.primaryBg)};
`;
Footer.defaultProps = {
  theme: {
    primary: '#000000',
    primaryBg: '#FFFFFF',
  },
};
