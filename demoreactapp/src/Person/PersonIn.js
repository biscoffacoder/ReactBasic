import React, { useEffect, useState } from 'react';

const PersonIn = (props) => {
    const [mouseClick, setMouseClick] = useState(0);

    const clickHandler = () => {
        setMouseClick(...mouseClick, mouseClick + 1);
    }
    const resetHandler = () => setMouseClick(0);
    

    return (
        <div>
            <button onClick={clickHandler}>Click Me to change count</button>
            <h3>This value comes from function passed as prop {props.name} and age is {props.age}</h3>
            <button onClick={()=>props.propsValue()}>Click me to change name</button>

            <h3>{props.children}</h3>
            <h3>This value comes from props {props.nameProp} and age is {props.ageProp}</h3>
            <h4>The Button was clicked {mouseClick} times</h4>
            <button onClick={resetHandler}>Reset</button>
        </div>
    )
}

export default PersonIn