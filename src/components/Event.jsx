import React from 'react'
let count = 0;

const Event = () => {
    const template = () => {
        return (
            <div>
                <h1>Count : {count}</h1>
                <button onClick={addOne}>Add</button>
                <button onClick={minusOne}>Sub</button>
                <button onClick={reset}>Reset</button>
            </div>
        )
    }

    const addOne = () => {
        count++;
        template();
    }

    const minusOne = () => {
        count--;
        template();
    }
    const reset = () => {
        count = 0;
        template();
    }

    return template();
}

// function tick() {
//     const element = (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {new Date().toLocaleTimeString()}.</h2>
//       </div>
//     );
//     ReactDOM.render(element, document.getElementById('root'));
//   }

//   setInterval(tick, 1000);

export default Event

// npx create-react-app my-app
// create-react-app my-app
