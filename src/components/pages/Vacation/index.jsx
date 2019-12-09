import React, { Component } from 'react';
import { connect } from "react-redux";
import { Buttons } from '../../blocks';
import {vacationsPending} from "../../../actions/vacationActionCreator";
import {getUserData} from "../../../services/localStorageService";
import {Loader} from "../../blocks";
import CreateVacation from "../CreateVacationModal";
import VacationItem from "../../blocks/VacationItem";
import EditVacation from "../EditVacationModal";
import DeleteVacation from "../DeleteVacationModal";
import ShowVacation from "../ShowVacationModal";

class Vacation extends Component {
    state = {
        vacation: {},
        isOpenCreateVacation: false,
        isOpenShowVacation: false,
        isOpenEditVacation: false,
        isOpenDeleteVacation: false,
    };
    handleIsOpenCreateVacationModalClick = () =>{
        this.setState({
            isOpenCreateVacation: !this.state.isOpenCreateVacation
        });
    };
    handleIsOpenShowVacationModalClick = () =>{
        this.setState({
            isOpenShowVacation: !this.state.isOpenShowVacation
        });
    };
    handleIsOpenEditVacationModalClick = () =>{
        this.setState({
            isOpenEditVacation: !this.state.isOpenEditVacation
        });
    };
    handleIsOpenDeleteVacationModalClick = () =>{
        this.setState({
            isOpenDeleteVacation: !this.state.isOpenDeleteVacation
        });
    };
    setVacation = (vacation)=>{
        this.setState({
            vacation
        });
    };
    handleEditButtonClick = (vacation)=> {
        this.setVacation(vacation);
        this.handleIsOpenEditVacationModalClick();
    };
    handleShowButtonClick= (vacation)=> {
        this.setVacation(vacation);
        this.handleIsOpenShowVacationModalClick();
    };
    handleDeleteButtonClick= (vacation)=> {
        console.log("DeleteVacation: ", vacation);
        this.setVacation(vacation);
        this.handleIsOpenDeleteVacationModalClick();
    };

    componentDidMount() {
        const userData = getUserData();
        this.props.dispatch(vacationsPending(userData));
    }
    render () {
        const {vacations: {isLoading},vacations } = this.props;
        if(isLoading) return <Loader/>;
        return (
            <>
                <CreateVacation
                isOpen={this.state.isOpenCreateVacation}
                onClose={this.handleIsOpenCreateVacationModalClick}
                />
                <EditVacation
                    vacation = {this.state.vacation}
                    isOpen={this.state.isOpenEditVacation}
                    onClose={this.handleIsOpenEditVacationModalClick}
                />
                <DeleteVacation
                    vacation = {this.state.vacation}
                    isOpen={this.state.isOpenDeleteVacation}
                    onClose={this.handleIsOpenDeleteVacationModalClick}
                />
                <ShowVacation
                    vacation = {this.state.vacation}
                    isOpen={this.state.isOpenShowVacation}
                    onClose={this.handleIsOpenShowVacationModalClick}
                />
                <section className="vacations">
                    <header className="header">
                        <span className="header__title">Vacations</span>
                        <Buttons.AddButton handleButtonClick={this.handleIsOpenCreateVacationModalClick}/>
                    </header>
                    <section className="vacations__container">
                        <section className="list-vacations">
                            {Object.values(vacations).map((vacation)=> {
                                return !vacation ? '': <VacationItem
                                    key={vacation._id}
                                    vacation={vacation}
                                    handleShowButtonClick={()=> this.handleShowButtonClick(vacation)}
                                    handleEditButtonClick={()=> this.handleEditButtonClick(vacation)}
                                    handleDeleteButtonClick={()=> this.handleDeleteButtonClick(vacation)}
                                />
                            })}
                        </section>
                    </section>
                </section>
            </>
        );
    }
}
const mapStateToProps = (state) => ({
    vacations: state.vacations
});
export default connect(mapStateToProps)(Vacation);
