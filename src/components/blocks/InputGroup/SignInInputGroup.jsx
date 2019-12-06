import React from 'react';

const SignInInputGroup = ({ email, password, rememberMe, handleEmailInputChange, handlePasswordInputChange, handleRememberMeCheckboxChange}) => (
    <section className="input-group">
        <input type="email" className="input-group__email" placeholder="Email" value={email} onChange={handleEmailInputChange}/>
        <input type="password"  className="input-group__password" placeholder="Password" value={password} onChange={handlePasswordInputChange}/>
        <section className="input-group__checkbox">
            <div className="pretty p-default p-round">
                <input type="checkbox" id="remember-me" className="remember-me" defaultChecked={rememberMe} onChange={handleRememberMeCheckboxChange}/>
                <div className="state p-success-o">
                    <label htmlFor="remember-me" className="input-group__checkbox_label">Remember me</label>
                </div>
            </div>
        </section>
    </section>
);
export default SignInInputGroup;