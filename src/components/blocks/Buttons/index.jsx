import React from 'react';
import { FiX, FiEdit2, FiTrash, FiPlus } from "react-icons/fi";
import { FaInfo } from "react-icons/fa";
import  * as  PropTypes   from 'prop-types';
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
    <span className="action action-delete" onClick={handleButtonClick}>
        <FiTrash size={12}  color={"#fff"}/>
    </span>
);
const EditButton = ({ handleButtonClick }) => (
    <span className="action action-edit" onClick={handleButtonClick}>
        <FiEdit2 size={12} color={"#fff"}/>
    </span>
);
const ShowButton = ({ handleButtonClick }) => (
    <span className="action  action-show" onClick={handleButtonClick}>
        <FaInfo size={12} color={"#fff"} />
    </span>
);
const AddButton = ({ handleButtonClick }) => (
    <FiPlus size={20} color={"#57bea5"} onClick={handleButtonClick}/>
);
const EditUserButton = ({handleButtonClick})=>(
    <section className="btn-link">
        <span className="btn-link__edit" onClick={handleButtonClick} ><FiEdit2 color={"#fff"} /></span>
    </section>
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
EditUserButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};
ShowButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};
AddButton.propTypes = {
    handleButtonClick: PropTypes.func.isRequired
};



export {
    SuccessButton,
    CloseButton,
    DeleteButton,
    EditButton,
    DeleteBtnModal,
    BackButton,
    DefaultButton,
    EditUserButton,
    ShowButton,
    AddButton
}
