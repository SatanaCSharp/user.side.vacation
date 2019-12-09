import axios from "axios";
import config from "../config";
import mapUserResponseToStateObject from "./mappers/mapUserResponseToObject";
const signUpRequest =  async (signUpFormData) => {
    if(!signUpFormData) return null;
    const signUpResponse = await axios.post(`${config.apiUrl}/auth/sign_up`, signUpFormData);
    return signUpResponse.data.user;
};

const getUserRequest = async (userId, token) => {
    if(!userId && !token) return null;
    const userResponse = await axios.get(`${config.apiUrl}/users/${userId}`,{
        headers:{"Authorization": token }
    });
    return mapUserResponseToStateObject(userResponse);
};

const putUserRequest = async ({ userId, token, firstName, lastName, email, hiredDate }) => {
    if(!userId) return null;
    const userResponse = await axios.put(`${config.apiUrl}/users/${userId}`,{
        firstName, lastName, email, hiredDate
    }, {
        headers:{"Authorization": token}
    });
    return mapUserResponseToStateObject(userResponse);
};

const getVacationsRequest =  async (userId, token) => {
    if(!userId) return null;
    const vacationsResponse = await axios.get(`${config.apiUrl}/vacations/users/${userId}`, {
        headers:{"Authorization": token}
    });
    return vacationsResponse.data;
};
const postVacationsRequest =  async ({userId, token, startDate, endDate, description}) => {
    if(!userId) return null;
    const vacationsResponse = await axios.post(`${config.apiUrl}/vacations/users/${userId}`,
        {
            startDate,
            endDate,
            description
        },
        {
        headers:{"Authorization": token}
    });
    return vacationsResponse.data;
};

const putVacationRequest =  async ({userId, token, vacationId,  startDate, endDate, description}) => {
    if(!userId) return null;
    const vacationsResponse = await axios.put(`${config.apiUrl}/vacations/${vacationId}/users/${userId}`,
        {
            startDate,
            endDate,
            description
        },
        {
        headers:{"Authorization": token}
    });
    return vacationsResponse.data;
};
const getVacationRequest =  async ({userId, token, vacationId}) => {
    if(!userId) return null;
    const vacationsResponse = await axios.get(`${config.apiUrl}/vacations/${vacationId}/users/${userId}`,
        {
        headers:{"Authorization": token}
    });
    return vacationsResponse.data;
};
const deleteVacationRequest =  async ({userId, token, vacationId}) => {
    if(!userId) return null;
    const vacationsResponse = await axios.delete(`${config.apiUrl}/vacations/${vacationId}/users/${userId}`,
        {
        headers:{"Authorization": token}
    });
    return vacationsResponse.data;
};


export {
    signUpRequest,
    getUserRequest,
    putUserRequest,
    getVacationsRequest,
    postVacationsRequest,
    putVacationRequest,
    getVacationRequest,
    deleteVacationRequest
}
