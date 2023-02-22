import React from 'react'
import { Link } from 'react-router-dom';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import '../dashboard.css'
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const LineChart = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",

                lineTension: 0.5,
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    return (
        <>
            <div className="col-12">
                <div className="card">
                    <div className="filter">
                        <Link className="icon" to="#" data-bs-toggle="dropdown" aria-expanded="false">
                            <MoreHorizOutlinedIcon className='dp' />
                        </Link>
                        <ul className="dropdown-menu b dropdown-menu-end dropdown-menu-arrow" >
                            <li className="dropdown-header text-start"><h6>Filter</h6></li>
                            <li><Link className="dropdown-item" to="#">Today</Link></li>
                            <li><Link className="dropdown-item" to="#">This Month</Link>
                            </li><li><Link className="dropdown-item" to="#">This Year</Link></li>
                        </ul>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Reports <span>/Today</span></h5>
                        <div id="reportsChart" style={{ minHeight: '365px' }}>
                            <Line data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineChart;