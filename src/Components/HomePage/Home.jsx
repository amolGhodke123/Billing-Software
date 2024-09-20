import React, { useState, useEffect } from 'react';
import './Navbar.css'; 

const Home = () => {
    const [isNavbarVisible, setIsNavbarVisible] = useState(false);
    const [isBodyPadded, setIsBodyPadded] = useState(false);
    const [isHeaderPadded, setIsHeaderPadded] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleNavbar = () => {
        setIsNavbarVisible(!isNavbarVisible);
        setIsBodyPadded(!isBodyPadded);
        setIsHeaderPadded(!isHeaderPadded);
    };

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    useEffect(() => {
        // Apply class to body and header based on the state
        const body = document.getElementById('body-pd');
        const header = document.getElementById('header');

        if (isBodyPadded) body.classList.add('body-pd');
        else body.classList.remove('body-pd');

        if (isHeaderPadded) header.classList.add('body-pd');
        else header.classList.remove('body-pd');
    }, [isBodyPadded, isHeaderPadded]);

    return (
        <div id="body-pd" className={isNavbarVisible ? 'body-pd' : ''}>
            <header className="header" id="header">
                <div className="header_toggle" onClick={toggleNavbar}>
                    <i className={isNavbarVisible ? 'bx bx-x' : 'bx bx-menu'} id="header-toggle"></i>
                </div>
                <div className="header_img">
                    <img src="https://i.imgur.com/hczKIze.jpg" alt="Profile" />
                </div>
            </header>
            <div className={`l-navbar ${isNavbarVisible ? 'show' : ''}`} id="nav-bar">
                <nav className="nav">
                    <div>
                        <a href="#" className="nav_logo">
                            <i className="bx bx-layer nav_logo-icon"></i>
                            <span className="nav_logo-name">BBBootstrap</span>
                        </a>
                        <div className="nav_list">
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'dashboard' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('dashboard')}
                            >
                                <i className="bx bx-grid-alt nav_icon"></i>
                                <span className="nav_name">Dashboard</span>
                            </a>
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'users' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('users')}
                            >
                                <i className="bx bx-user nav_icon"></i>
                                <span className="nav_name">Users</span>
                            </a>
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'messages' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('messages')}
                            >
                                <i className="bx bx-message-square-detail nav_icon"></i>
                                <span className="nav_name">Messages</span>
                            </a>
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'bookmark' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('bookmark')}
                            >
                                <i className="bx bx-bookmark nav_icon"></i>
                                <span className="nav_name">Bookmark</span>
                            </a>
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'files' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('files')}
                            >
                                <i className="bx bx-folder nav_icon"></i>
                                <span className="nav_name">Files</span>
                            </a>
                            <a
                                href="#"
                                className={`nav_link ${activeLink === 'stats' ? 'active' : ''}`}
                                onClick={() => handleLinkClick('stats')}
                            >
                                <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
                                <span className="nav_name">Stats</span>
                            </a>
                        </div>
                    </div>
                    <a href="#" className="nav_link">
                        <i className="bx bx-log-out nav_icon"></i>
                        <span className="nav_name">SignOut</span>
                    </a>
                </nav>
            </div>
            <div className="height-100 bg-light">
                <h4>Main Components</h4>
            </div>
        </div>
    );
};

export default Home;
