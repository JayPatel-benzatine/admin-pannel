import React, { useEffect } from 'react'
import './navbar.css'
import './aside.css'

// Import MuiComponent
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Avatar from '@mui/material/Avatar';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import Stack from '@mui/material/Stack';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

// Import component
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Scroll from '../Scroll Button/Scroll'
import Acccodians from '../../component/Accodian/Acccodians'

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Aside = () => {
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);
    const [windowSize, setWindowSize] = React.useState(getWindowSize());
    const sampleLocation = useLocation();
    const handleDrawerOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        sampleLocation.pathname === "/" && navigate('/dash')

        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
        // eslint-disable-next-line 
    }, []);

    useEffect(() => {
        if (windowSize.innerWidth > 1025) {
            setOpen(true)
        }
        if (windowSize.innerWidth < 1025) {
            setOpen(false)
        }
    }, [windowSize])

    function getWindowSize() {
        const { innerWidth } = window;
        return { innerWidth };
    }


    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <>
                            <nav className="navbar fixed-top navbar-light bg-light ">
                                <div className="container-fluid d-flex align-items-center">
                                    <div className="left d-flex justify-content-between align-items-center">
                                        <div className="logos d-flex align-items-center">
                                            <img src={require('../../asserts/icon.png')} alt="" style={{ width: '25px', height: '25px' }} />
                                            <Link className="navbar-brand ms-2 me-0 p-0 logos_title" to="/dash">NiceAdmin</Link>
                                        </div>
                                        <div className="mx-5">
                                            <IconButton
                                                aria-label="open drawer"
                                                onClick={handleDrawerOpen}
                                                edge="start"
                                                sx={{ ...(open), color: '#012970' }}
                                            >
                                                <MenuIcon className='toggle_menu' />
                                            </IconButton>
                                        </div>
                                        <div className="search d-none">
                                            <div className="input-group">
                                                <input className="form-control rounded-pill" type="search" placeholder='Search' id="example-search-input" style={{ width: '300px' }} />
                                                <button className="btn btn-outline seach_btn" type="button"> <SearchIcon /> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right d-flex align-items-center">
                                        <Stack direction="row" spacing={2} className='dropdown'>
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"
                                                sx={{ width: 35, height: 35 }}
                                                className='messages'
                                                id="dropdownMenuButton1"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            />
                                            <ul className="dropdown-menu profile_list" aria-labelledby="dropdownMenuButton1">
                                                <li className=' text-center px-3 pt-2' style={{ cursor: 'pointer' }}>
                                                    <h6 className='fw-bold text-capitalize mb-0'>jay patel</h6>
                                                    <p className=' text-muted text-capitalize'>react devloper</p>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <PersonOutlineOutlinedIcon className='me-2' /> <span className=' text-capitalize'>  my profile</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <SettingsOutlinedIcon className='me-2' /> <span className=' text-capitalize'>account  settings</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <HelpOutlineOutlinedIcon className='me-2' /> <span className=' text-capitalize'>need  help ?</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <LogoutOutlinedIcon className='me-2' /> <span className=' text-capitalize'>sign out</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Stack>
                                        <div className="dropdown me-3 user_dropdown">
                                            <button className=" dropdown-toggle text-capitalize user_drop" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> jay patel </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li className=' text-center px-3 pt-2' style={{ cursor: 'pointer' }}>
                                                    <h6 className='fw-bold text-capitalize mb-0'>jay patel</h6>
                                                    <p className=' text-muted text-capitalize'>react devloper</p>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <PersonOutlineOutlinedIcon className='me-2' /><span className=' text-capitalize'>  my profile</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <SettingsOutlinedIcon className='me-2' /> <span className=' text-capitalize'>account  settings</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="#">
                                                        <div className="d-flex">
                                                            <HelpOutlineOutlinedIcon className='me-2' /><span className=' text-capitalize'>need  help ?</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link className="dropdown-item" to="/login">
                                                        <div className="d-flex">
                                                            <LogoutOutlinedIcon className='me-2' />  <span className=' text-capitalize'>sign out</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{ width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box', zIndex: 1 }, }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader />
                    <>
                        <div className="menu_lists">
                            <ul className='sidebar-nav list-unstyled p-3'>
                                <li className="nav-item" onClick={()=>setOpen(false)}>
                                    <NavLink className="nav-link" to="/dash">
                                        <DashboardOutlinedIcon className='side_icons me-2' />
                                        <span >Dashboard</span>
                                    </NavLink>
                                </li>
                                <li className="nav-item" onClick={()=>setOpen(false)}>
                                    <Link className="nav-link" to="/register">
                                        <ListAltOutlinedIcon className='side_icons me-2' />
                                        <span>Register Patient</span>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={()=>setOpen(false)}>
                                    <Link className="nav-link" to="/visit">
                                        <ListAltOutlinedIcon className='side_icons me-2' />
                                        <span>Add Visits</span>
                                    </Link>
                                </li>
                                <li className="nav-item" onClick={()=>setOpen(false)}>
                                    <Link className="nav-link" to="/equipment">
                                        <ListAltOutlinedIcon className='side_icons me-2' />
                                        <span>Add Equipment</span>
                                    </Link>
                                </li>
                                <li className="nav-item" >
                                    <Acccodians />
                                </li>

                            </ul>
                        </div>
                    </>
                </Drawer>
                <Main open={open} id='demo'>
                    <DrawerHeader />
                    <Outlet />
                </Main>
                <Scroll />
            </Box>
        </>
    )
}

export default Aside