import React from "react";

const Input=React.forwardRef((props,ref)=>
{
    return(
        <>
        <label htmlFor={props.label}>{props.label}</label>
        <input type={props.type} onChange={props.changeHandler} onBlur={props.onBlur} id={props.label} ref={ref} required/>
        </>
    )
})

export default Input;