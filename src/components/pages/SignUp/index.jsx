import React, { Component } from 'react';
import { Buttons, Inputs } from '../../blocks';
import { Link} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { signUpRequest } from "../../../services/requestService";
import { setUserData }  from "../../../services/localStorageService";
import { SIGH_UP_FORM_ERRORS } from '../../../constants/errorTypes';
import ErrorsService from '../../../services/ErrorsService';

class SignUpPage extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        errors: [],
        redirect: false
    };
    handleInputChange = ({ target: {name, value } }) => {
        this.setState({
            [name]: value
        });
    };

    handleButtonClick = () => {
        const errorsService = new ErrorsService();
        const {firstName, lastName, email, password, passwordConfirmation} = this.state;
        errorsService.setFormErrorsIfExists(SIGH_UP_FORM_ERRORS, {
            firstName,
            lastName,
            email,
            password,
            passwordConfirmation});
        if(errorsService.isEmpty) {
            errorsService.showErrors();
        } else {
            signUpRequest({firstName, lastName, email, password, passwordConfirmation})
            .then((user) => {
                setUserData(user._id, user.token)
            }).then(()=>{
                this.props.history.push("/cabinet");
            });
        }
    };
    render () {
        const {firstName, lastName, email, password, passwordConfirmation} = this.state;
        return (
            <>
                <ToastContainer />
                <section className="sign-up-page content">
                    <section className="container">
                            <h3 className="sign-up-page__title">Sign Up</h3>
                            <img className="sign-up-page__user-photo"
                                 src="https://cdn4.iconfinder.com/data/icons/web-ui-color/128/Account-512.png"
                                 alt=""/>
                            <section className="input-group">
                                <section className= "input-group__user-name">
                                    <Inputs.InputText
                                        name={"firstName"}
                                        value={firstName}
                                        nameOfClass={"input-group__user-name_first"}
                                        placeholder={"First Name"}
                                        handleInputChange={this.handleInputChange}
                                    />
                                    <Inputs.InputText
                                        name={"lastName"}
                                        value={lastName}
                                        nameOfClass={"input-group__user-name_last"}
                                        placeholder={"Last Name"}
                                        handleInputChange={this.handleInputChange}
                                    />
                               </section>
                                <Inputs.InputEmail
                                    name={"email"}
                                    value={email}
                                    nameOfClass={"input-group__email"}
                                    placeholder={"Email"}
                                    handleInputChange={this.handleInputChange}
                                />
                                <section className="input-group__passwords">
                                    <Inputs.InputPassword
                                        name={"password"}
                                        value={password}
                                        nameOfClass={"input-group__passwords_password"}
                                        placeholder={"Password"}
                                        handleInputChange={this.handleInputChange}
                                    />
                                    <Inputs.InputPassword
                                        name={"passwordConfirmation"}
                                        value={passwordConfirmation}
                                        nameOfClass={"input-group__password-confirmation"}
                                        placeholder={"Password Confirmation"}
                                        handleInputChange={this.handleInputChange}
                                    />
                                </section>
                            </section>
                            <div className="sign-up-page__button">
                                <Buttons.SuccessButton buttonTitle="Sign Up" handleButtonClick={this.handleButtonClick}/>
                            </div>
                            <section className="links">
                                <ul className="links-list">
                                    <li className="links-list__link-item"><Link to="/sign_in"> Already have an account?</Link></li>
                                </ul>
                            </section>
                    </section>
                </section>
            </>
        );
    }
}

export default  SignUpPage;
