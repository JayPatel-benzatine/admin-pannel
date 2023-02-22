import React from 'react'
import './accodians.css'
import EqualizerOutlinedIcon from '@mui/icons-material/EqualizerOutlined';
import PanoramaFishEyeOutlinedIcon from '@mui/icons-material/PanoramaFishEyeOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { Link } from 'react-router-dom';


const Acccodians = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link collapsed" data-bs-target="#tables-nav" data-bs-toggle="collapse" to="#" aria-expanded="false">
                    <EqualizerOutlinedIcon />
                    <span>Analytics</span>
                    <ExpandMoreOutlinedIcon className="bi bi-chevron-down ms-auto" style={{ width: '25px', height: '25px' }} />
                </Link>
                <ul id="tables-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav" >
                    <li className='tabs'>
                        <Link to="/table" className='tabsss'>
                            <PanoramaFishEyeOutlinedIcon className='circles' />
                            <span>General Tables</span>
                        </Link>
                    </li>

                </ul>
            </li>
        </>
    )
}

export default Acccodians