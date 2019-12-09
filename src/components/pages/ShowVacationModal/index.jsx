import React, { Component} from "react";
import Modal  from "../../portals/Modal";
import {connect} from "react-redux";

class ShowVacation extends Component {
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
            startDate: props.vacation.startDate,
            endDate: props.vacation.endDate,
            description: props.vacation.description
        }
    }

    render () {
        const {startDate, endDate, description } = this.state;
        if(!this.props.isOpen) return null;
        return(
            <>
                <Modal
                    title="Delete vacation"
                    isOpen={this.props.isOpen}
                    onClose={this.props.onClose}
                >
                    <section className="vacation-show">
                        <section className="dates">
                            <span className="dates__start-date">{startDate.substring(0, 10)}</span>
                            -
                            <span className="dates__end-date">{endDate.substring(0, 10)}</span>
                        </section>
                        <section className="description">
                            {description}
                        </section>
                    </section>
                </Modal>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    vacations: state.vacations
});
export default connect(mapStateToProps)(ShowVacation);
