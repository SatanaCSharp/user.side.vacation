import { toast } from 'react-toastify';
import { EDIT_USER_FORM_ERRORS, SIGH_UP_FORM_ERRORS } from '../constants/errorTypes';
import EditUserFormError from './errors/EditUserFormError';
import mapFormErrorToArray from './mappers/mapFormErrorToArray';
import SignUpFormError from './errors/SignUpFormError';
class ErrorsService {
    constructor() {
        this.errors = [];
    }
    get getErrors(){
        return this.errors;
    }
    get isEmpty () {
        return this.errors.length > 0 ? true : false;
    }
    getFormErrors(formError = {}) {
        return mapFormErrorToArray(formError).filter((err)=> err !== undefined);
    }
    createFormError(type, formData) {
        switch(type) {
            case EDIT_USER_FORM_ERRORS:
                return new EditUserFormError(formData);
            case SIGH_UP_FORM_ERRORS:
                return new SignUpFormError(formData);
            default:
                return {};
        };
    }
    setFormErrorsIfExists(type, formData) {
        const formError = this.createFormError(type, formData);
        const formErrors = this.getFormErrors(formError);
        this.errors = formErrors;
    }
    showErrors() {
        if(this.errors.length) {
            this.errors.forEach((err)=>{
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 10000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                  });
            });
        }
    }
}

export default ErrorsService;