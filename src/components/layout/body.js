import React, { Component } from 'react'
import styled from 'styled-components'

/**
 * BodyComponent
 * @param {object} props BodyComponent properties
 * @param {string} props.children Children
 * @param {string} props.className Classname
 * @returns
 */
function BodyComponent({ children, className }) {
    return (
        <section className={className}>{children}</section>
    )
}

/**
 * Body is a styled version of the BodyComponent.
 * @type {Component}
 */
export const Body = styled(BodyComponent)`
flex: 1;
`