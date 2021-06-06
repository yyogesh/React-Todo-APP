import React from 'react'

const HOCLoading = (WrapperComponent) => {
    console.log(WrapperComponent)
    return function WithLoadingComponent({ isLoading, ...props }) {
        console.log('props', props)
        if (!isLoading) {
            return <WrapperComponent {...props} />
        }
        return <p>Hold on, fetcing data might take some time.</p>
    }
}

export default HOCLoading
