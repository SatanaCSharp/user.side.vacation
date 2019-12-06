import React from "react";
import PropTypes  from 'prop-types';
const InputText = ({value, name, placeholder, nameOfClass, handleInputChange})=> (
    <input type="text" name={name} value={value} onChange={handleInputChange} placeholder={placeholder} className={nameOfClass}/>
);
const InputPassword = ({value, name, placeholder, nameOfClass, handleInputChange})=> (
    <input type="password" name={name} value={value} onChange={handleInputChange} placeholder={placeholder} className={nameOfClass}/>
);
const InputEmail = ({value, name, placeholder, nameOfClass, handleInputChange})=> (
    <input type="email" name={name} value={value} onChange={handleInputChange} placeholder={placeholder} className={nameOfClass}/>
);

const InputCheckbox = ({ id, nameOfClass, isChecked, handleCheckboxChange })=> (
    <input type="checkbox" id={id} className={nameOfClass} checked={isChecked} onChange={handleCheckboxChange}/>
);

InputText.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    nameOfClass: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};
InputPassword.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    nameOfClass: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};
InputEmail.propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    nameOfClass: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};
InputCheckbox.propTypes = {
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    nameOfClass: PropTypes.string.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired
};


export {
    InputText,
    InputPassword,
    InputEmail,
    InputCheckbox
}
