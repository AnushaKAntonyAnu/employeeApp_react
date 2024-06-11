import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmployee = () => {
    const [data, setData] = useState(
        {
            "id": "",
            "name": "",
            "job": "",
            "salary": ""
        }
    )
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8082/add",data).then(
            (response)=>{
                if (response.data.status=="success") {
                    alert("successfully added")
                } else {
                    alert("error")
                }
            }
        ).catch().finally()
    }
    return (
        <div>
            <NavBar />
            <h3 align="center" ><u>Employee Registration</u></h3><br></br>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Employee Job</label>
                                <input type="text" className="form-control" name='job' value={data.job} onChange={inputHandler} />
                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="text" className="form-control" name='salary' value={data.salary} onChange={inputHandler} />
                            </div>

                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center> <button className="btn btn-success" onClick={readValue}>Submit</button></center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddEmployee