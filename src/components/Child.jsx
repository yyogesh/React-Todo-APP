import React from 'react'

const Child = (props) => {
    console.log(props);
    return (
        <div>
            Child Component {props.message}
        </div>
    )
}

export default Child
