
import React from "react";
import PropTypes  from 'prop-types';
const Input = ({value, name, placeholder, nameOfClass, handleInputChange})=> (
    <input type="text" name={name} value={value} onChange={handleInputChange} placeholder={placeholder} className={"input " + nameOfClass}/>
)

Input.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    nameOfClass: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
}


export {
    Input
}