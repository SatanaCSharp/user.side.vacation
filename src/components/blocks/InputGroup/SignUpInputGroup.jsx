
import React from 'react';
const SignUpInputGroup = ({ userProp, handleInputChange}) => (
    <section className="input-group">
        <section className= "input-group__user-name">
            <input type="text" name="firstName" value={userProp.firstName} onChange={handleInputChange}  className="input-group__user-name_first"placeholder="First Name" autoFocus/>
            <input type="text"name="lastName" value={userProp.lastName} onChange={handleInputChange}  className="input-group__user-name_last"placeholder="Last Name" />
        </section>
        <input type="email" name="email" value={userProp.email} onChange={handleInputChange}  className="input-group__email" placeholder="Email"/>
        <section className="input-group__passwords">
            <input type="password" name="password" value={userProp.password} onChange={handleInputChange}  className="input-group__passwords_password" placeholder="Password"/>
            <input type="password" name="passwordConfirmation" value={userProp.passwordConfirmation} onChange={handleInputChange} className="input-group__passwords_password-confirmation" placeholder="Password Confirmation" />
        </section>
    </section>
);
export default SignUpInputGroup;