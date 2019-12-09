import {toast} from 'react-toastify';
import {EDIT_USER_FORM_ERRORS, SIGH_UP_FORM_ERRORS, VACATION_FORM_ERRORS} from '../constants/errorTypes';
import EditUserFormError from './errors/EditUserFormError';
import mapFormErrorToArray from './mappers/mapFromErrorToArray';
import SignUpFormError from './errors/SignUpFormError';
import VacationFormError from "./errors/VacationFormError";

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
             case VACATION_FORM_ERRORS:
                return new VacationFormError(formData);
            default:
                return {};
        }
    }
    setFormErrorsIfExists(type, formData) {
        const formError = this.createFormError(type, formData);
        this.errors = this.getFormErrors(formError);
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
