import * as validationService from '../validationService';
class VacationFormError {
    constructor({startDate, endDate, balance,  description }) {
        this.duration = validationService.validateVacationDuration(startDate, endDate, balance);
        this.description = validationService.validateDescription(description);
    }
}
export default VacationFormError;
