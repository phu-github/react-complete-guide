import React, {useReducer} from 'react';

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer function
// 4. Dispatch
const initalState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
const reducer = (state, action) => {
    console.log("reducer runing ...")
    switch (action){
        case UP_ACTION:
            return state += 1;
        case DOWN_ACTION:
            return state -= 1;
        default: 
            throw new Error('Invalid action');
    }
}

function UpDown(props) {
    const [count, dispatch_1] = useReducer(reducer, initalState); 
    return (
        <>
            <h1>Up & down USING REDUCER</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch_1(UP_ACTION) }>UP</button>
            <button onClick={() => dispatch_1(DOWN_ACTION) }>DOWN</button>
        </>
    );
}

export default UpDown;