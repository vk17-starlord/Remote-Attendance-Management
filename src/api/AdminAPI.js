import axios from "axios";
import { baseURL , headers  , MultFormHeaders } from "./config";



export const getEmployees = async () => {

    return await axios.get(`${baseURL}/employee/`).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })

}



export const getEmployeeByID = async (id) => {
    return await axios.get(`${baseURL}/employee/${id}`).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })
}


export const DeleteEmployeeByID = async (id) => {
    return await axios.delete(`${baseURL}/employee/${id}`).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })
}


export const CreateEmployeeData = async (payload) => {
    return await axios.post(`${baseURL}/employee/register`, payload, {
        headers: MultFormHeaders
    })
        .then(res => {
            return res.data;
        }
        ).catch((err) => {
            return { err: err };
        })
}


export const getEmployeeAttendance = async (id, timestamp) => {

    const URL = `${baseURL}/employee/${id}/monthly-working-data?timestamp=${timestamp}`

    return await axios.get(URL).then((res) => {
        return res.data;
    }).catch(() => {
        return { err: "error occurred" }
    })
}

export const ResetPasswordFunc = async (payload) => {
    return await axios.post(`${baseURL}/auth/reset-password`, payload )

        .then(res => {
            return res.data;
        })
        .catch(() => {
            return { err: "error occurred" }
        })
}


export const SearchByName = async (payload) => {
    return await axios.get(`${baseURL}/employee/search/name?namePattern=${payload}`).then((res) => {
        return res.data;
    }).catch(() => {
        return { err: "error occurred" }
    })
}


export const UpdateEmployee = async (payload) => {
    return await axios.put(`${baseURL}/employee/${payload.empId}`, payload )
        .then(res => {
            return res.data;
        })
        .catch(() => {
            return { err: "error occurred" }
        })
}
