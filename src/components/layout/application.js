import React, { Component } from 'react'
import styled from 'styled-components'
import { Body } from './body'
import { Footer } from './footer'
import { Header } from './header'

/**
 * ApplicationComponent
 * @param {object} props ApplicationComponent properties
 * @param {string} props.children Children
 * @param {string} props.className Classname
 * @returns
 */
function ApplicationComponent({ children, className }) {
    return (
        <div className={className}>
            <Header />
            <Body>{children}</Body>
            <Footer />
        </div>
    )
}

/**
 * Application is a styled version of the ApplicationComponent.
 * @type {Component}
 */
export const Application = styled(ApplicationComponent)`
    height: 100%;
    display: flex;
    flex-direction: column;
`