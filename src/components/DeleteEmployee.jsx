import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



export default function DeleteEmployee() {
    const { id } = useParams()

    const [emp, setemp] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/employee${id}`)
            .then(res => {
                console.log(res.data)
                setemp(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    axios.delete(`http://localhost:5000/employee/${id}`)
        .then(res => {
            console.log(res.data)
            console.log("deleted")

            setemp(emp.filter(employee => employee.empId !== id))
        })
        .catch(err => {
            console.log(err)
        })

}
