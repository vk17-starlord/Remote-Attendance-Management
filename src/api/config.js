export const baseURL = "http://localhost:5000"
export const token = sessionStorage.getItem("token") ?? null;

export const  headers =  {
    'Authorization': `Bearer ${token}` 
}



export const  MultFormHeaders =  {
    'Authorization': `Bearer ${token}` ,
    'Content-Type': 'multipart/form-data'
            
}

