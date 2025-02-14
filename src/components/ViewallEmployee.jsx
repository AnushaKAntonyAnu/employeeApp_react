import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewallEmployee = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8082/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
        
    return (
        <div>
            <NavBar/>
            <br></br><h3 align="center" ><u>ViewAll Employees</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table table-striped">

                                <thead>
                                    <tr>
                                        <th scope="col">SNO</th>
                                        <th scope="col">Employee ID</th>
                                        <th scope="col">Employee Name</th>
                                        <th scope="col">Employee Job</th>
                                        <th scope="col">Salary</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (value,index)=>{
                                            return<tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{value.id}</td>
                                            <td>{value.name}</td>
                                            <td>{value.job}</td>
                                            <td>{value.salary}</td>
                                        </tr>
                                        }
                                    )}
                                   
                                </tbody>
                            </table>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewallEmployee