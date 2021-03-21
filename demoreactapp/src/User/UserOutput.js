import React from 'react'
import  "./User.css";


const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName is {props.inputValue}</p>
            <button onClick={props.nameChangeHandler}>Change Name </button>
        </div>
    )
}

export default UserOutput
