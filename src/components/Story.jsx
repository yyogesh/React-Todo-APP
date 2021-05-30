import React from 'react'


const components = {
    photo: ({ storyType }) => {
        return <div> Color of date Photo is :; {storyType}</div>
    },
    video: ({ storyType }) => {
        return <div> Color of video is :; {storyType}</div>
    }
};

const Story = ({ storyType, isColor }) => {
    console.log('isColor', storyType, isColor)
    const SpecificStory = components[storyType];

    return (
        <div>
            <SpecificStory storyType={storyType} />
        </div>
    )
}

export default Story
