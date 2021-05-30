import React from 'react'

const Header = ({ title, subTitle, children }) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subTitle}</p>
            {children}
        </>
    )
}

export default Header
