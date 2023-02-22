import React from 'react'
import '../dashboard.css'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Link } from 'react-router-dom';

const Revenue = () => {
    return (
        <>
            <div className="col-xxl-4 col-md-6">
                <div className="card info-card revenue-card">
                    <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown">
                            <MoreHorizOutlinedIcon className='dp'/>
                        </Link>
                        <ul className="dropdown-menu b dropdown-menu-end dropdown-menu-arrow">
                            <li className="dropdown-header text-start"><h6>Filter</h6></li>
                            <li><Link className="dropdown-item" to="#">Today</Link></li>
                            <li><Link className="dropdown-item" to="#">This Month</Link></li>
                            <li><Link className="dropdown-item" to="#">This Year</Link></li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Revenue <span>| This Month</span></h5>
                        <div className="d-flex align-items-center">
                            <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                <AttachMoneyOutlinedIcon className='carts' />
                            </div>
                            <div className="ps-3">
                                <h6>$3,264</h6>
                                <span className="text-success small pt-1 fw-bold">8%</span>
                                <span className="text-muted small pt-2 ps-1">increase</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Revenue