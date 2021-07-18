import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * FooterComponent
 * @param {object} props FooterComponent properties
 * @param {string} props.children Children
 * @param {string} props.className Classname
 * @returns
 */
function FooterComponent({ children, className }) {
    return (
        <footer className={className}>{children}</footer>
    )
}

/**
 * Footer is a styled version of the FooterComponent.
 * @type {Component}
 */
export const Footer = styled(FooterComponent)`
height: 4rem;
background: ${props => props.theme.primaryBg};
color: ${props => props.theme.primary};
box-shadow: 5px 5px 0 darken(${props => props.theme.primaryBg}, 5%);
`