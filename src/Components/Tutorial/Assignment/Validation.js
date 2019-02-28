import React from 'react'

const Validation = (props)=>{

    let len = props.len;
    let validText = "too short";
    if(len>=5 && len<=10)
        validText = "valid text";
    if(len>10)
        validText = "too Long";
    
    
    return (
        <div className="Validation">
        
        {
            props.len >5 ? <p>Text is Long</p> : <p>Text is short</p>
        }
        
        </div>
    );
};

export default Validation;