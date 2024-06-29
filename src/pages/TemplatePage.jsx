import React from 'react'
import { Header, Footer } from '../components'

export const TemplatePage = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}
