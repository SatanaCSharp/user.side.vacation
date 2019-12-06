import React, { Component } from 'react';
import { Buttons, Inputs } from '../../blocks';
import { Link } from "react-router-dom";
import config from '../../../config';
import axios from  'axios';
import {
    setUserData,
    clearSignInData,
    getUserData,
    setSignInData,
    getSignInData} from '../../../services/localStorageService';

class SignInPage extends Component {
    state = {
        userId: '',
        token: '',
        email: '',
        password: '',
        rememberMe: false,
        errors: []
    };
    handleInputChange = ({ target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };
    handleCheckboxChange = ({target: {checked}}) => {
        this.setState({ rememberMe: checked });
        if(checked && this.state.email && this.state.password ) {
            setSignInData(this.state.email, this.state.password);
        } else {
          clearSignInData();
        }
    };
    handleButtonClick = () => {
          const {email, password} = this.state;
          axios.post(`${config.apiUrl}/auth/sign_in`, {email, password}).then(({ data: { user }})=>{
              setUserData(user._id, user.token);
          }).then(()=> {
              const {userId, token} =  getUserData();
              this.setState({
                userId,
                token
              });
              console.log("Authorized");
          });
    };
    componentDidMount() {
       const {signInEmail, signInPassword} =  getSignInData();
       if(signInEmail && signInPassword ) {
           this.setState({
                email: signInEmail,
                password: signInPassword,
                rememberMe: true
           });
       }
    }
    render () {
        const {email, password, rememberMe } = this.state;

        return (
            <section className="sign-in-page content">
                <section className="container">
                        <h3 className="sign-in-page__title">Sign In</h3>
                        <img className="sign-in-page__user-photo"
                             src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png"
                             alt=""/>
                    <section className="input-group">
                        <Inputs.InputEmail
                            handleInputChange={this.handleInputChange}
                            nameOfClass={"input-group__email"}
                            placeholder={"Email"}
                            name={"email"}
                            value={email}/>
                        <Inputs.InputPassword
                            handleInputChange={this.handleInputChange}
                            nameOfClass={"input-group__password"}
                            placeholder={"Password"}
                            name={"password"}
                            value={password}/>
                        <section className="input-group__checkbox">
                            <div className="pretty p-default p-round">
                                <Inputs.InputCheckbox
                                    isChecked={rememberMe}
                                    nameOfClass={"remember-me"}
                                    id={"remember-me"}
                                    handleCheckboxChange={this.handleCheckboxChange}/>
                                <div className="state p-success-o">
                                    <label htmlFor="remember-me" className="input-group__checkbox_label">Remember me</label>
                                </div>
                            </div>
                        </section>
                    </section>
                        <div className="sign-up-page__button">
                            <Buttons.SuccessButton
                                buttonTitle="Sign In"
                                handleButtonClick={this.handleButtonClick}
                                buttonDisabledClass={" "}
                            />
                        </div>
                        <section className="links">
                            <ul className="links-list">
                                {/*<li className="links-list__link-item"><Link to="/forgot_password"> Forgot password?</Link></li>*/}
                                <li className="links-list__link-item"><Link to="/sign_up"> Don`t have an account?</Link></li>
                            </ul>
                        </section>
                </section>
            </section>
        )
    }
}
export default SignInPage;
