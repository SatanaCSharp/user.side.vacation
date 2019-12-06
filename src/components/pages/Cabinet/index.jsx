import React, { Component } from 'react';
import UserEdit from "../EditUser";
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import { UserInfoBlock } from "../../blocks";
import { getUserData } from '../../../services/localStorageService';

class Cabinet extends Component {
    state = {
        isOpenUserEdit: false
    }
    handleIsOpenModalClick = () =>{
        this.setState({
            isOpenUserEdit: !this.state.isOpenUserEdit
        });
    }
    componentDidMount() {
        const { user } = this.props;
        console.log(user);
        if(!Object.keys(user).length) {
            const userData = getUserData();
            this.props.dispatch(userPending(userData));
        }
    }
    render() {
        const {user} = this.props;
        // const vacations = [];
        return (
            <>
            <UserEdit
            isOpen={this.state.isOpenUserEdit}
            onClose={this.handleIsOpenModalClick}
            />
            <section className="cabinet">
                <section className="container">
                    <UserInfoBlock props={user} handleEditUserButtonClick={this.handleIsOpenModalClick}/>
                    {/* <VacationListBlock vacations={vacations}/> */}
                </section>
            </section>
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps)(Cabinet);