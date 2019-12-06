import * as validationService from '../validationService';
class SignUpFormError {
    constructor({firstName, lastName, email, password, passwordConfirmation}) {
        this.firstName =  validationService.validateNameField(firstName, "First name");
        this.lastName =  validationService.validateNameField(lastName, "Last name");
        this.email =  validationService.validateEmailField(email);
        this.password =  validationService.validatePassword(password);
        this.passwordConfirmation =  validationService.validatePasswordConfirmation(password, passwordConfirmation);
    }
}
export default SignUpFormError;