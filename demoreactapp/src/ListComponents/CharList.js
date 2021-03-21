import React from 'react'
import "./ListComponent.css"

const CharList = (props) => {
 
    let arrayValues = [...props.charArray];
   
    const display =
    (
        <div>
            {arrayValues.map((ele,index)=>
            {
                return (
                    <ul className="CharacterVal" key={index}>
                    <button value={ele} onClick={()=>{props.deleteEle(ele,index)}} placeholder={`Delete this Value? ${ele[index]}`}>Delete Value - {ele}</button>
                    </ul>
                )
            })}
        </div>
    )
    return (
        <div>
            {display}
        </div>
    )
}

export default CharList
