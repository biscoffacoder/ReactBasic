import React, { useState } from 'react';
import ValidationList from "./ValidationList";
import CharList from "./CharList";
import "./ListComponent.css"

const ListMain = () => {
    //Hooks
    const [len, setLen] = useState();
    const [stringArray, setStringArray] = useState([]);

    
    const sizeHandler = (event) => {
        let stringArray = event.target.value.split('');
       let lengthValue = stringArray.length;

        console.log(stringArray);
        console.log(lengthValue);
        setLen(lengthValue);
        setStringArray(stringArray);



    }

    const deleteValue = (ele, ind) => {
        console.log(`${ele} and ${ind}`);
        let baseArray = [...stringArray];
        let delValue = baseArray.findIndex((item,index)=>{
            return (item===ele && index===ind)
        });
        console.log(baseArray);
        baseArray.splice(delValue,1);

        console.log(baseArray);
        setStringArray(baseArray);
       
    }

    return (
        <div>

            <input className="ListMain" type="text" onChange={sizeHandler} placeholder={stringArray.join('')}/>
            <ValidationList validLength={len} />
            <CharList charArray={stringArray} deleteEle={deleteValue} />
        </div>
    )
}

export default ListMain
