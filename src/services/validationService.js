const validateNameField = (name, fieldName) => {
    const reg = /^[a-zA-Z ]{2,30}$/;
    const isName =  reg.test(name);
    if(!isName) return `${fieldName} has to contain  only letters!`;
}
const validateEmailField = (email) => {
    const  reg = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = reg.test(String(email).toLowerCase());
    if(!isEmail) return "Email is incorrect!"
}
const validatePassword = (password) => {
    const reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
    const isPassword = reg.test(password);
    if(!isPassword) return "Password mast contain at least: 1 small letter, 1 big letter and one digit. Password must be 6 characters or longer!"
}

const validatePasswordConfirmation = (password, passwordConfirmation) => {
    if(passwordConfirmation !== password) return "Passwords don`t match!";
}
const validateDate = (date) => {
    const dateForTesting = new Date(date).toISOString().substr(0, 10);
    const reg = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/;
    const isDate = reg.test(dateForTesting);
    if(!isDate) return "Incorrect date format!";
}

export {
    validateNameField,
    validateEmailField,
    validatePassword,
    validatePasswordConfirmation,
    validateDate
}