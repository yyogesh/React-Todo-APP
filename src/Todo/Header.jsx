import React from 'react'

const Header = ({ title, subTitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{subTitle}</p>
        </div>
    )
}

export default Header
