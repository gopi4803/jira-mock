import React from "react";

export function InputField({type,placeholder,className, ...rest}){
    return <input 
    type={type} 
    placeholder={placeholder} 
    className={`ipt ${className || ""}`}
    {...rest}/>
}

export function ButtonField({label, className, children, ...rest}){
    return <button className={`btn ${className || ""}`} {...rest}>
        {children ? children : label}
        </button>
}