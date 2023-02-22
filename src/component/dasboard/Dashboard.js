import React from 'react'
import './dashboard.css'
import Shop from './subdashboard/Shop';
import Revenue from './subdashboard/Revenue';
import Customers from './subdashboard/Customers';
import LineChart from './subdashboard/LineChart';
import RecentActivity from './subdashboard/RecentActivity';
import PieChart from './subdashboard/PieChart';

const Dashboard = () => {
    return (
        <div className='dash_main'>
            <div className="pagetitle">
                <h1>Dashboard</h1>
            </div>
            <section className='section dashboard mt-4'>
                <div className="row">
                    <div className="col-lg-7 ">
                        <div className="row">
                            <Shop />
                            <Revenue />
                            <Customers />
                            <LineChart />
                        </div>
                    </div>
                    <div className="col-lg-5 ">
                        <RecentActivity />
                        <PieChart />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Dashboard