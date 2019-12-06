import * as validationService from '../validationService';
class EditUserFormError {
    constructor({firstName, lastName, email, hiredDate }) {
        this.firstName = validationService.validateNameField(firstName, "First name");
        this.lastName = validationService.validateNameField(lastName, "Last name");
        this.email =  validationService.validateEmailField(email);
        this.hiredDate = validationService.validateDate(hiredDate);
    }
}
export default EditUserFormError;