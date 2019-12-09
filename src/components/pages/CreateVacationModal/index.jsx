import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import {Buttons, DatePickers, Inputs} from "../../blocks";
import { ToastContainer } from 'react-toastify';
import {connect} from "react-redux";
import {getUserData} from "../../../services/localStorageService";
import {vacationCreatePending} from "../../../actions/vacationActionCreator";
import ErrorsService from "../../../services/ErrorsService";
import {VACATION_FORM_ERRORS} from "../../../constants/errorTypes";

class CreateVacation extends Component {
    state = {
        startDate: new Date(),
        endDate: new Date(),
        description: ''
    };
    handleInputChange = ({target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    handlerStartDate = (date)=> {
        this.setState({
            startDate: date
        });
    };
    handlerEndDate = (date)=> {
        this.setState({
            endDate: date
        });
    };
    clearInputsState = () => {
        this.setState({
            startDate: new Date(),
            endDate: new Date(),
            description: ''
        })
    };
    handleButtonClick = () => {
        const errorsService = new ErrorsService();
        const {userId, token} = getUserData();
        const {startDate, endDate, description } = this.state;
        errorsService.setFormErrorsIfExists(VACATION_FORM_ERRORS, {
            startDate,
            endDate,
            description,
            balance: this.props.user.vacationBalance
        });
        if(errorsService.isEmpty) {
            errorsService.showErrors();
        } else {
            this.props.dispatch(vacationCreatePending({userId, token, startDate, endDate, description}));
            this.clearInputsState();
            this.props.onClose();
        }

    };


    render () {
        const {startDate, endDate, description } = this.state;
        if(!this.props.isOpen) return null;
        return(
            <>
                <ToastContainer />
                <Modal
                    title="Create vacation"
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                >
                    <section className="vacation-create">
                        <section className="input-group input-group-modal">
                            <section className="input-group__date-picker">
                                <DatePickers.StartDatePicker
                                startDate={startDate}
                                handlerStartDate={this.handlerStartDate}
                                />
                                <DatePickers.EndDatePicker
                                endDate={endDate}
                                startDate={startDate}
                                handlerEndDate={this.handlerEndDate}
                                />
                            </section>
                            <Inputs.InputTextArea
                                value={description}
                                name={"description"}
                                handleInputChange={this.handleInputChange}
                                placeholder={"Description"}
                                nameOfClass={"input-group__description"}
                            />
                            <Buttons.SuccessButton
                                buttonTitle="Create"
                                handleButtonClick={this.handleButtonClick}
                            />
                        </section>

                    </section>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user,
    vacations: state.vacations
});
export default connect(mapStateToProps)(CreateVacation);
