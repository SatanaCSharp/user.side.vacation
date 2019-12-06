import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import { connect } from "react-redux";
import { Inputs } from "../../blocks";
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
    }
    initUserState(user) {
        const { firstName, lastName, email, hiredDate } = user;
        const userData = getUserData();
        this.setState({
            userId: userData.userId,
            token: userData.token,
            firstName: firstName,
            lastName: lastName,
            email: email,
            hiredDate: new Date(hiredDate).toISOString(),
        });
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
    }

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
    }

    componentDidMount() {
        this.initUserState(this.props.user);
    }

    render () {
        const props = this.state;
        return(
            <Modal
            title="Edit personal detail"
            isOpen={this.props.isOpen}
            onClose={this.props.onClose}
            >
                <ToastContainer />
                <section className="user-edit">
                        <Inputs.EditUserInputGroup
                            props={props}
                            handleInputChange={this.handleInputChange}
                            handleButtonClick={this.handleButtonClick}
                            handleInputDateChange={this.handleInputDateChange}
                        />
                </section>
            </Modal>

        )
    }
}
const mapStateToProps = (state) =>({
    user: state.user
});
export default connect(mapStateToProps)(EditUser);