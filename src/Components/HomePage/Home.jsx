import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaChartPie, FaChartLine, FaCalendarAlt, FaBook, FaHome, FaUsers, FaAngleDown, FaFileAlt, FaMoneyBillWave, FaClock, FaClipboardList, FaCog, FaShieldAlt, FaBars, FaRegBell, FaUser, FaTh, FaSignOutAlt } from 'react-icons/fa';
import { useAlert } from '../AlertBox/AlertContext';
import { useEffect } from 'react';
import Customer from './Customer/Customer';


const Home = ({ onSignUpClick }) => {
    const [navVisible, setNavVisible] = useState(false);
    const [iconToggle, setIconToggle] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [section, setSection] = useState('Home'); // Default section

    const showAlert = useAlert();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 800) {
                setNavVisible(false); // Ensure sidebar is visible on larger screens
            } else {
                setNavVisible(true); // Collapse sidebar on smaller screens
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const onToggle = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('active', isActive);
    };

    const toggleNavbar = () => {
        setNavVisible(!navVisible);
        setIconToggle(!iconToggle);
    };
    const handleChangeParentState = () => {
        // This function updates the parent's state using the setter function from props    
        showAlert('success', 'Logged out Successfully!');
        onSignUpClick(false);
    };
     

    return (
        <>
        <div className="wrapper">
            <div className={`wrapper ${isActive ? 'active' : ''}`}>
                {/*<h1 style={{ marginLeft: isActive ? '0' : '225px', transition: 'margin-left 0.5s' }}>*/}
                {/*    Welcome to the Dashboard*/}
                {/*</h1>*/}
                {/* Other content can go here */}
            </div>
            <div className={`sidebar ${navVisible ? 'collapsed' : ''}`}>


                <div className="profile" style={{ display: navVisible ? 'none' : 'block' }}>
                    <img src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg" alt="profile" />
                    <h3 style={{ display: navVisible ? 'none' : 'block' }}>anamika.pandey@gmail.com</h3>
                    <p style={{ display: navVisible ? 'none' : 'block' }}>Manager</p>
                </div>
                <ul>
                    <li>
                        <a href="#" className="active">
                            <span className="icon">
                                <FaHome />
                            </span>
                            <span className="item">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" onClick={() => setSection('Customers')}>
                            <span className="icon">
                                <FaUsers />
                            </span>
                            <span className="item">Customers</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaChartLine />
                            </span>
                            <span className="item">Items</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaClipboardList />
                            </span>
                            <span className="item">Quotes</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaFileAlt />
                            </span>
                            <span className="item">Delivery Challans</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaFileAlt />
                            </span>
                            <span className="item">Invoices</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaMoneyBillWave />
                            </span>
                            <span className="item">Payments Received</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaChartPie />
                            </span>
                            <span className="item">Expenses</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaClock />
                            </span>
                            <span className="item">Time Tracking</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaChartPie />
                            </span>
                            <span className="item">Reports</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaCog />
                            </span>
                            <span className="item">Advanced Billing</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaCog />
                            </span>
                            <span className="item">Configure Feature List</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span className="icon">
                                <FaCog />
                            </span>
                            <span className="item">Configure Feature List</span>
                        </a>
                    </li>
                  
                </ul>



            </div>
            <div className="section">
                    <div className="top_navbar">
                        <div className="hamburger" style={{ marginTop:'5px' }}>

                        <a href="#" onClick={toggleNavbar}>
                            <FaBars style={{ color: '#181C2E', marginLeft: navVisible ? '4rem' : '11rem', transition: 'all 0.5s ease' }} className="FaBars" />
                            {/*color: navVisible ? 'red' : '#181C2E', // Change color based on navVisible*/}
                            {/*marginLeft: '12rem',*/}
                            {/*transition: 'color 0.3s ease' */}

                        </a>
                        {/*<a style={{ marginLeft: '120vh' }} className="popup-titleN">Sikka Software</a>*/}
                        <a href="#">
                            <span style={{ color: '#181C2E', marginLeft: '55rem' }} className="FaAngleDown Home-text">Amol</span>

                            <FaAngleDown style={{color: '#181C2E',marginLeft: '0.4rem',display: 'inline-block',verticalAlign: 'middle',}} className="angle-down"/>

                            {/* Add Button */}

                            <button className="add-button">
                                <span className="add-sign">+</span>
                            </button>
                         

                        </a>

                   
                        <a href="#">
                            <FaRegBell style={{ color: '#181C2E', marginLeft: '1.7rem' }} className="RightSideIcon" />

                        </a>
                      
                        <a href="#">

                            <FaCog style={{ color: '#181C2E',marginLeft:'1.7rem'}} className="RightSideIcon" />
                        </a>                                               
                        <a href="#">                                       
                            <FaUser style={{ color: '#181C2E',marginLeft:'1.7rem'}} className="RightSideIcon" />

                        </a>
                        <a href="#" onClick={handleChangeParentState}>                                       
                            <FaSignOutAlt style={{ color: '#181C2E',marginLeft:'1.7rem'}} className="RightSideIcon" />

                        </a>
                    </div>
                    </div>

                </div>
                <div style={{ paddingTop: '50px', marginLeft: navVisible ? '80px' : '200px', transition: 'all 0.5s ease' }}>
                   
                    {section === "Customers" && <Customer />}

                </div>

        </div>


       </>
    );
};

export default Home;





