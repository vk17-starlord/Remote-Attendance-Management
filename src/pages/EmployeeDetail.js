import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ViewEmployee from '../components/ViewEmployee'

function EmployeeDetail() {

  const { id } = useParams()

  return (

    <ViewEmployee/>

  )
}

export default EmployeeDetail