import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import { connect } from "react-redux";
import {Buttons, DatePickers, Inputs} from "../../blocks";
import { ToastContainer } from 'react-toastify';
import { getUserData } from "../../../services/localStorageService";
import { userEditPending } from "../../../actions/userActionCreator";
import ErrorsService from "../../../services/ErrorsService";
import { EDIT_USER_FORM_ERRORS } from "../../../constants/errorTypes";


class EditUser extends Component {
    state = {
        userId: '',
        token: '',
        firstName: '',
        lastName: '',
        email: '',
        hiredDate: '',
    };
    static getDerivedStateFromProps(props, state) {
        const {props: { firstName, lastName, email, hiredDate } } = props;
        const {userId, token} = getUserData();
        if(!firstName && !lastName && !userId && !token && !email && !hiredDate) return null;
        if(state.userId && state.token && state.firstName && state.lastName && state.email && state.hiredDate) return null;
        return {
            userId,
            token,
            firstName,
            lastName,
            email,
            hiredDate: new Date(hiredDate),
        }
    }
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    handleInputDateChange=(date)=>{
        this.setState({
            hiredDate: date
        });
    };

    handleButtonClick = () => {
        const errorsService = new ErrorsService();
        const { userId, token, firstName, lastName, email, hiredDate } = this.state;
        errorsService.setFormErrorsIfExists(EDIT_USER_FORM_ERRORS, {firstName, lastName, email, hiredDate});
        if(errorsService.isEmpty) {
            errorsService.showErrors();
        } else {
          this.props.dispatch(userEditPending({ userId, token, firstName, lastName, email, hiredDate }));
          this.props.onClose();
        }
    };


    render () {
        const {  firstName, lastName, email, hiredDate } = this.state;
        if(!this.props.isOpen) return null;
        return(
            <>
                <ToastContainer />
                <Modal
                title="Edit personal detail"
                isOpen={this.props.isOpen}
                onClose={this.props.onClose}
                >
                    <section className="user-edit">
                        <section className="input-group input-group-modal">
                            <section className= "input-group__user-name">
                                <Inputs.InputText
                                    name={"firstName"}
                                    value={firstName}
                                    nameOfClass={"input-group__user-name_first"}
                                    placeholder={"First Name"}
                                    handleInputChange={this.handleInputChange}
                                />
                                <Inputs.InputText
                                    name={"lastName"}
                                    value={lastName}
                                    nameOfClass={"input-group__user-name_last"}
                                    placeholder={"Last Name"}
                                    handleInputChange={this.handleInputChange}
                                />
                            </section>
                            <Inputs.InputEmail
                                value={email}
                                name={"email"}
                                nameOfClass={"input-group__email"}
                                placeholder={"Email"}
                                handleInputChange={this.handleInputChange}
                            />
                             <section className="input-group__date-picker">
                                <DatePickers.InputDatePicker
                                    hiredDate={hiredDate}
                                    handleInputDateChange={this.handleInputDateChange}
                                />
                            </section>
                            <Buttons.SuccessButton
                                buttonTitle="Edit"
                                handleButtonClick={this.handleButtonClick}
                            />
                        </section>
                    </section>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) =>({
    user: state.user
});
export default connect(mapStateToProps)(EditUser);
