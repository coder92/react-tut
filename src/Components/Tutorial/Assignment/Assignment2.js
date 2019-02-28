import React from 'react';
import Validation from './Validation'

const Assignment2 = (props)=>{
    return(
        <div className="Assignment2">
            <input type="text" onChange={props.changed} value={props.value}></input>
            <p>text length is: {props.length}</p>
            <Validation len = {props.length} />
        </div>
    )
};

export default Assignment2;
