import React, { Component } from 'react';
import { connect } from "react-redux";
import {vacationsPending} from "../../../actions/vacationActionCreator";
import {getUserData} from "../../../services/localStorageService";
import {Loader} from "../../blocks";

class Vacation extends Component {
    state = {
    };
    componentDidMount() {
        const userData = getUserData();
        this.props.dispatch(vacationsPending(userData));
    }

    render () {
        console.log("this props: ", this.props);
        const {vacations: {isLoading} } = this.props;
        if(isLoading) return <Loader/>
        return (
            <>
                <section className="vacations">
                    Vacations
                </section>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    vacations: state.vacations
});
export default connect(mapStateToProps)(Vacation);
