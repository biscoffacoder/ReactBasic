import React from 'react'
import "./ListComponent.css"

const ValidationList = (props) => {
    const greaterThan = (
        <div className="Valid">
            <p> Text long enough</p>
        </div>
    )
    const lessThan=(
        <div className="Invalid">
            <p>Text too short</p>
        </div>
    )
    return (
        <div >
            {(props.validLength>5 ? greaterThan:lessThan)}

        </div>
    )
}

export default ValidationList
