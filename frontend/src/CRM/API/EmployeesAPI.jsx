import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/'
});

export const employeesAPI = {
    getEmployees(){
        return  instance.get('employees')
            .then(response => {
                return response.data
    })
},

};