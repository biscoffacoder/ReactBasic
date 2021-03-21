import React, { useState, useEffect } from 'react';
import PersonIn from './PersonIn';
import './Person.css'

const Person = () => {

    let age12 = Math.floor(Math.random() * 20);

    const [age, setAge] = useState(0);
    const [name, setName] = useState();

    useEffect(() => {
        setName("Allan");
        setAge("24");
    }, [])
    const propsFunction=()=>
    {
        setName("Ashish");
        setAge("25");
    }
    return (

        <div className="Person">
            <h2>This property is being set using Hooks. My age is {age} and name is {name}</h2>
            <PersonIn nameProp='Allan' ageProp='26' name={name} age={age} propsValue={propsFunction}>Another child</PersonIn>
            <h3>This value is from a local variable. Cars in my dream {age12}</h3>
        </div>
    )
}



export default Person
