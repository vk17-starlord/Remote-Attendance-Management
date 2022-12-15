import axios from "axios";
import { baseURL } from "./config";

export const getEmployees = async()=>{

   return await axios.get(`${baseURL}/employee/`).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err}
    })

}



export const getEmployeeByID = async(id)=>{
    return await axios.get(`${baseURL}/employee/${id}`).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err}
    })
}


export const DeleteEmployeeByID = async(id)=>{
    return await axios.delete(`${baseURL}/employee/${id}`).then((res)=>{
        return res.data
    }).catch((err)=>{
        return {err:err}
    })
}


export const CreateEmployeeData = async(payload)=>{
     console.log(payload,"here")
     return await axios.post(`${baseURL}/employee/register`, payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(res => {
            console.log(res)
          return res.data;
        }
        ).catch((err)=>{
            console.log(err)
            return {err:err};
        })
}


export const getEmployeeAttendance = async(id , timestamp )=>{

    const URL = `${baseURL}/employee/${id}/monthly-working-data?timestamp=${timestamp}`
   
    return await axios.get(URL).then((res)=>{
        return res.data;
    }).catch(()=>{
        return {err:"error occurred"}
    })
}