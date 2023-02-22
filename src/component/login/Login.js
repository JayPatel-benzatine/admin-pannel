import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './login.css'

const Login = () => {
  const [send, setSend] = useState(false)
  const [numbers, setNumbers] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate()
  const onlogin = () => {
    setSend(!send)
  }
  const handleOtp = () => {
    navigate('/')
  }

  return (
    <div style={{ backgroundColor: '#f6f9ff' }}>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center py-4">
                  <a href="index.html" className="logo d-flex align-items-center w-auto">
                    <img src={require('../../asserts/lg.png')} alt="" />
                    <span>NiceAdmin</span>
                  </a>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <div className="pt-4 pb-2">
                      <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    </div>
                    <form className="row g-3 needs-validation mb-5 mt-2">
                      <div className="col-12">
                        <label htmlFor="Number" className="form-label">Enter Mobile Number</label>
                        <div className="input-group has-validation">
                          <input type="tel" name="phone" className="form-control"
                            onChange={(e) => setNumbers(e.target.value)}
                            maxLength={10} minLength={10} required autoComplete='off' />
                          <div className="invalid-feedback">Please enter your Phone.</div>
                        </div>
                      </div>

                      <div className={`col-12 ${send ? '' : 'd-none'}`}>
                        <label htmlFor="yourotp" className="form-label">Verify Your OTP</label>
                        <input type="tel" name="otp" className="form-control"
                          onChange={(e) => setOtp(e.target.value)}
                           maxLength={6} minLength={6}
                          id="yourotp" required />
                        <div className="invalid-feedback">Please enter your otp!</div>
                      </div>

                      <div className="col-12">
                        {
                          !send ? (
                            <button className={`btn btn-primary w-100 ${numbers.length === 10 ? '' : ' disabled'}`}
                              onClick={onlogin}
                              type="submit">Login</button>
                          ) :
                            (
                              <button className={`btn btn-primary w-100 ${otp.length === 6 ? '' : ' disabled'}`}
                                onClick={handleOtp}
                                type="submit">verify</button>
                            )
                        }
                      </div>
                    </form>
                  </div>
                </div>
                <div className="">
                  <p className="small mb-0">Don't have account? <Link to="/signup">Create an account</Link></p>
                </div>
              </div>
            </div>
          </div>
        </section >
      </div >
    </div >
  )
}

export default Login