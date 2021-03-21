import React, { useState } from 'react';
import "./User.css";
import UserOutput from './UserOutput';

const UserInput = () => {
    //Hooks
    const [inputValue, setInputValue] = useState();
    const [flag, setFlag] = useState(false);


    const names = [
        {id:12, name: "Rockets" },
        {id:11, name: "GO" },
        {id:13, name: "BOOM" },
        {id:14, name: "BOOM" }];

    const inputHandler = (event) => {
        setInputValue(event.target.value);
    }
    const nameChangeHandler = () => {
        let name = names[(Math.floor(Math.random() * 4))].name;

        setInputValue(name);

    }

    const changeFlag = () => {
        flag ? setFlag(false) : setFlag(true);
        console.log(`${flag}`);
        console.log(names);

    }
    let renderValue = (
        <div>
            <input type="text" onChange={inputHandler} placeholder="Please enter value here" />
            <UserOutput inputValue={inputValue} nameChangeHandler={nameChangeHandler} />
            <button onClick={changeFlag}>Click to Show all Names</button>
        </div>
    );
    const renderAllNames = (
        <div>
            <h4>All Names</h4>
            {
                names.map((obj) => {
                    return (
                        <ol key={obj.id}>
                            <p >{obj.name}</p>
                            
                        </ol>
                    )

                })
            }


        </div>
    );

    return (
        <div className="UserInput">
            {renderValue}
            {
                flag ? renderAllNames : null
            }

        </div>
    )
}

export default UserInput
