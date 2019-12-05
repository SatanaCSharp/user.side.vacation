import React from 'react';
import { FiX, FiEdit2, FiTrash } from "react-icons/fi";
import { GiFamilyTree } from "react-icons/gi";
import PropTypes  from 'prop-types';
import {Link} from "react-router-dom";
const SuccessButton = ({buttonTitle, handleButtonClick }) => (
    <button className={"success-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const DeleteBtnModal = ({buttonTitle, handleButtonClick })=>(
    <button className={"delete-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const BackButton = ({to, title }) => (
    <Link className="back-btn " to={to}>{title}</Link>
);
const DefaultButton = ({buttonTitle, handleButtonClick }) => (
    <button className={"default-btn "} onClick={  handleButtonClick}>{buttonTitle}</button>
);
const CloseButton = ({ handleButtonClick }) => (
    <FiX size={25} color={"#6c757d"} onClick={handleButtonClick}/>
);
const DeleteButton = ({ handleButtonClick }) => (
    <FiTrash size={25}  color={"#8a2727"} onClick={handleButtonClick}/>
);
const EditButton = ({ handleButtonClick }) => (
    <FiEdit2 size={25} color={"#008CBA"} onClick={handleButtonClick}/>
);
const TreeButton = ({ handleButtonClick }) => (
    <GiFamilyTree  size={25} color={"#555555"} onClick={handleButtonClick}/>
);


SuccessButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired
};
DeleteBtnModal.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired
};
DefaultButton.propTypes = {
    buttonTitle: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func.isRequired
};
BackButton.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

CloseButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};
DeleteButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};
EditButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};
EditButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};



export {
    SuccessButton,
    CloseButton,
    DeleteButton,
    EditButton,
    TreeButton,
    DeleteBtnModal,
    BackButton,
    DefaultButton
}