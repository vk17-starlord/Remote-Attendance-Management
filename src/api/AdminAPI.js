import axios from "axios";
import { baseURL , headers  , MultFormHeaders } from "./config";



export const getEmployees = async () => {

    return await axios.get(`${baseURL}/employee/`,{headers:headers}).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })

}



export const getEmployeeByID = async (id) => {
    console.log("called")
    console.log(headers)
    return await axios.get(`${baseURL}/employee/${id}`,{headers:headers}).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })
}


export const DeleteEmployeeByID = async (id) => {
    return await axios.delete(`${baseURL}/employee/${id}`,{headers:headers}).then((res) => {
        return res.data
    }).catch((err) => {
        return { err: err }
    })
}


export const CreateEmployeeData = async (payload) => {
    console.log(payload, "here")
    return await axios.post(`${baseURL}/employee/register`, payload, {
        headers: MultFormHeaders
    })
        .then(res => {
            console.log(res)
            return res.data;
        }
        ).catch((err) => {
            console.log(err)
            return { err: err };
        })
}


export const getEmployeeAttendance = async (id, timestamp) => {

    const URL = `${baseURL}/employee/${id}/monthly-working-data?timestamp=${timestamp}`

    return await axios.get(URL).then((res) => {
        return res.data;
    },{headers:headers}).catch(() => {
        return { err: "error occurred" }
    })
}

export const ResetPasswordFunc = async (payload) => {
    return await axios.post(`${baseURL}/auth/reset-password`, payload ,{headers:headers})

        .then(res => {
            console.log(res)
            return res.data;
        })
        .catch(() => {
            return { err: "error occurred" }
        })
}

export const SearchByName = async (payload) => {
    return await axios.get(`${baseURL}/employee/search/name?namePattern=${payload}`,{headers:headers}).then((res) => {
        console.log(res.data)
        return res.data;
    }).catch(() => {
        return { err: "error occurred" }
    })
}