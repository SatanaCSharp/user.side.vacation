import React, { Component } from 'react';
import EditUser  from "../EditUser";
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import {Loader, UserInfoBlock} from "../../blocks";
import { getUserData } from '../../../services/localStorageService';
import Vacation from "../Vacation";

class Cabinet extends Component {
    state = {
        isOpenUserEdit: false
    };
    handleIsOpenModalClick = () =>{
        this.setState({
            isOpenUserEdit: !this.state.isOpenUserEdit
        });
    };
    componentDidMount() {
        const { user } = this.props;
        if(!Object.keys(user).length) {
            const userData = getUserData();
            this.props.dispatch(userPending(userData));
        }
    }
    render() {
        const {user: {isLoading}, user} = this.props;
        if(isLoading) return <Loader/>;
        return (
            <>
                <EditUser
                    props={user}
                    isOpen={this.state.isOpenUserEdit}
                    onClose={this.handleIsOpenModalClick}
                />
                <section className="cabinet">
                    <section className="container">
                        <UserInfoBlock props={user} handleEditUserButtonClick={this.handleIsOpenModalClick}/>
                        <Vacation/>
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
