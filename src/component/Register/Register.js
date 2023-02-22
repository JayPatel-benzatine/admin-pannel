import React from 'react'
import './register.css'


const Register = () => {
    return (
        <>
         <div className="container pagetitle my-4">
                <h1>Registration Form</h1>
            </div>
            <section className="h-100">
                <div className="container h-100">
                    <div className="card">
                        <div className="card-body">
                            <form className="row g-3 p-4">
                                <div className="col-md-12">
                                    <label htmlFor="inputName5" className="form-label">Your Name</label>
                                    <input type="text" className="form-control form-control-lg" id="inputName5" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputEmail5" className="form-label">Email</label>
                                    <input type="email" className="form-control form-control-lg" id="inputEmail5" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputPassword5" className="form-label">Password</label>
                                    <input type="password" className="form-control form-control-lg" id="inputPassword5" required/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress5" className="form-label">Address</label>
                                    <input type="text" className="form-control form-control-lg" id="inputAddres5s" placeholder="1234 Main St" required/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                    <input type="text" className="form-control form-control-lg" id="inputAddress2" placeholder="Apartment, studio, or floor" required/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputCity" className="form-label">City</label>
                                    <input type="text" className="form-control form-control-lg" id="inputCity" required/>
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="inputState" className="form-label">State</label>
                                    <select id="inputState" className="form-select form-select-lg" required>
                                        <option selected="">Choose...</option>
                                        <option>...</option>
                                    </select>
                                </div>
                                <div className="col-md-2">
                                    <label htmlFor="inputZip" className="form-label">Zip</label>
                                    <input type="text" className="form-control form-control-lg" id="inputZip" required/>
                                </div>
                                <div className="col-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="gridCheck" required/>
                                        <label className="form-check-label" htmlFor="gridCheck"> Check me out </label>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary me-4">Submit</button>
                                    <button type="reset" className="btn btn-secondary">Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Register