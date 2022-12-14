import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'



export default function DeleteEmployee() {
    const { id } = useParams()

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3001/employees${id}`)
            .then(res => {
                console.log(res)
                setEmployees(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    const deleteEmployee = (id) => {
        axios.delete(`http://localhost:3001/employees/${id}`)
            .then(res => {
                console.log(res)
                setEmployees(employees.filter(employee => employee.id !== id))
            })
            .catch(err => {
                console.log(err)
            })
    }
    deleteEmployee(id);
}
