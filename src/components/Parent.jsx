import React from 'react'
import Child from './Child'

const Parent = () => {
    return (
        <div>
            Parent
            <hr />
            <Child message="parent send a message to child component" />
        </div>
    )
}

export default Parent
