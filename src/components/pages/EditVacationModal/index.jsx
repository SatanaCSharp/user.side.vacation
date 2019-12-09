import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import {Buttons, DatePickers, Inputs} from "../../blocks";
import { ToastContainer } from 'react-toastify';
import {connect} from "react-redux";
import {getUserData} from "../../../services/localStorageService";
import { vacationsUpdatePending } from "../../../actions/vacationActionCreator";
import ErrorsService from "../../../services/ErrorsService";
import {VACATION_FORM_ERRORS} from "../../../constants/errorTypes";

class EditVacation extends Component {
    state = {
        vacationId: '',
        startDate: new Date(),
        endDate: new Date(),
        description: ''
    };
    static getDerivedStateFromProps(props, state) {
        if(!props.vacation.startDate && !props.vacation.endDate && !props.vacation.description) return null;
        if(state.startDate && state.endDate && state.description) return null;
        return {
            vacationId: props.vacation._id,
            startDate: new Date(props.vacation.startDate),
            endDate: new Date(props.vacation.endDate),
            description: props.vacation.description
        }

    }
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

    handleButtonClick = () => {
        const errorsService = new ErrorsService();
        const {userId, token} = getUserData();
        const { vacationId, startDate, endDate, description } = this.state;
        errorsService.setFormErrorsIfExists(VACATION_FORM_ERRORS, {
            startDate,
            endDate,
            description,
            balance: this.props.user.vacationBalance
        });
        if(errorsService.isEmpty) {
            errorsService.showErrors();
        } else {
            this.props.dispatch(vacationsUpdatePending({userId, vacationId,token, startDate, endDate, description}));
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
                    title="Edit vacation"
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
                                buttonTitle="Update"
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
export default connect(mapStateToProps)(EditVacation);
