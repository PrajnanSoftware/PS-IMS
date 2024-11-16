import '../scssFiles/navAndSide.scss'
import { IoSpeedometer } from "react-icons/io5"
import { FaBox, FaShoppingCart, FaTags, FaUsers } from "react-icons/fa";
import bell from '../assets/images/bell.png'
import search from '../assets/images/vector.png'
import profile from '../assets/images/profile.png'
import dropDown from '../assets/images/dropDown.png'
import { AiOutlineRise } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
const NavAndSide = () => {

    return (
        <>
            <div style={{
                height: '90px', backgroundColor: '#FFFFFF',
                padding: '10px 25px',
                gap: '0px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                opacity: '0px',
                position: 'fixed',
                width: '100%',
                zIndex: '100'
            }}>
                <div style={{
                    width: '52px',
                    height: '40px',
                    gap: '10px',
                    opacity: '0px'
                }} id='toggle-sidebar'>
                    <div style={{
                        width: '32px',
                        border: '2px'
                    }}>
                        <hr />
                    </div>
                    <div style={{
                        width: '32px',
                        border: '2px'
                    }}>
                        <hr />
                    </div>
                    <div style={{
                        width: '32px',
                        border: '2px'
                    }}>
                        <hr />
                    </div>
                </div>
                <div style={{
                    width: '269px',
                    height: '70px',
                    padding: '5px 10px',
                    gap: '15px',
                    opacity: '0px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                    <div style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '5px',
                        opacity: '0px',
                        backgroundColor: '#EAEAEA',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            marginLeft: '1px',
                            // marginTop: '1px',
                            width: '24px',
                            height: '24px',
                            border: '2px'
                        }}> <img src={search} alt="" style={{
                            left: '2px',
                            right: '2px',
                            top: '2px',
                            bottom: '2px',
                            height: '20px',
                            width: '20px',

                            color: ' #101540'
                        }} />
                        </div>
                    </div>
                    <div style={{
                        width: '24px',
                        height: '24px',
                    }}>
                        <img src={bell} alt="" />
                    </div>
                    <div style={{
                        width: '135px',
                        height: '60px',
                        gap: '5px',
                        opacity: '0px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div style={{
                            width: '40px',
                            height: '40px'
                        }}>
                            <img src={profile} alt="" />
                        </div>
                        <div style={{
                            width: '57px',
                            height: '21px'
                        }}>
                            <span>Ann lee</span>
                        </div>
                        <div style={{
                            marginBottom: '8px'
                        }}>
                            <img src={dropDown} alt="" style={{
                                width: '5.8px',
                                height: ' 3.74px'
                            }} />
                        </div>

                    </div>




                </div>
            </div >
            <div className="sidebar" id="sidebar">
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">
                    <IoSpeedometer style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />
                    <span className="sidebar-text">
                        Dashboard
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background-color: #4a148c' : 'background-color: #6a1b9a'} to="#">
                    <FaBox style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />

                    <span className="sidebar-text">
                        In Stock
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background-color: #4a148c' : 'background-color: #6a1b9a'} to="#">
                    <FaTags style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />

                    <span className="sidebar-text">
                        Products
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background-color: #4a148c' : 'background-color: #6a1b9a'} to="#">
                    <AiOutlineRise style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />

                    <span className="sidebar-text">
                        Sales
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/orders">
                    <FaShoppingCart style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />

                    <span className="sidebar-text">
                        Orders
                    </span>
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? 'background-color: #4a148c' : 'background-color: #6a1b9a'} to="#">
                    <FaUsers style={{ color: 'white', fontSize: '30px', display: 'inline-block', marginRight: '10px' }} />

                    <span className="sidebar-text">
                        Users
                    </span>
                </NavLink>
            </div>
        </>
    )
}

export default NavAndSide