import React, { Component } from 'react';
import EditUser  from "../EditUser";
import { connect } from "react-redux";
import { userPending } from "../../../actions/userActionCreator";
import {Loader, UserInfoBlock} from "../../blocks";
import { getUserData } from '../../../services/localStorageService';
import Vacation from "../Vacation";
import { Redirect} from "react-router-dom";

class Cabinet extends Component {
    state = {
        isAuth: false,
        isOpenUserEdit: false
    };
    static getDerivedStateFromProps(props, state) {
        const {userId, token} = getUserData();
        if(!userId && !token) return null;
        if(state.isAuth) return null;
        return {
            isAuth: true
        }

    }
    handleIsOpenModalClick = () =>{
        this.setState({
            isOpenUserEdit: !this.state.isOpenUserEdit
        });
    };
    componentDidMount() {
        const {userId, token} = getUserData();
        this.props.dispatch(userPending({userId, token}));

    }
    render() {
        const {user: {isLoading}, user} = this.props;
        if(isLoading) return <Loader/>;
        if(!this.state.isAuth) return <Redirect to="/sign_in"/>;
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
