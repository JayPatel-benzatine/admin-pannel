import React from 'react'
import { Link } from 'react-router-dom'
import '../dashboard.css'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  
  return (
    <>
      <div className="card">
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
        <div className="card-body pie_body">
          <h5 className="card-title">Recent Activity <span>| Today</span></h5>
          <div className="p_cahrt">
            <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default PieChart