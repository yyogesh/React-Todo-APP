import React from 'react'

const Action = ({ hasTodos, handleRemoveAll, handleRandomOptionPick }) => {
    return (
        <div>
            <button disabled={!hasTodos} onClick={handleRandomOptionPick}>What should i do?</button>
            <button disabled={!hasTodos} onClick={handleRemoveAll}>Remove All</button>
        </div>
    )
}

export default Action
