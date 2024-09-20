import React from 'react';

import { useState } from 'react';
import logo from './images.png';
import SignUp from './SignUp';
import Home from '../HomePage/Home';


function Login() {
    const [isOpen, setIsOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoginBtnClick, setIsLoginBtnClick] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        setIsLogin(false);
    };
    const handleLoginClick = () => {
        setIsLoginBtnClick(true);
    };
    return (
        <>
            {isLogin ?

                ( isLoginBtnClick ?<><Home/> </> : < div className="overlay">
                    <div className="popup">
                        {/*<button className="close" onClick={() => console.log('Close Popup')}>*/}
                        {/*    &times;*/}
                        {/*</button>*/}
                        <div className="form-container">
                            <div className="form-section">
                                <img src={logo} alt="Logo" className="popup-logo" /> {/* Logo */}
                                <div className="popup-title">Sign in</div>
                                <div className="popup-title1">to access Invoice</div>
                                <form>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            id="email"
                                            placeholder="Email address or mobile number"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="login-btn" onClick={handleLoginClick}>
                                        Login
                                    </button>
                                    <div className="popup-title2">Don't have a Zoho account ? <span className="highlight-text" onClick={handleClick}>Sign up now</span></div>
                                </form>
                            </div>
                            <div className="divider" />
                            <div className="form-section">
                                <form>
                                    <div className="form-section right-section">
                                        <img src="/billing4.svg" alt="Informative" className="info-image" /> {/* Add another image */}
                                        <p className="popup-title">MFA - for all accounts</p>

                                        <p className="popup-title3">Learn more about our features and how they can help you manage your </p>
                                        <button className="learn-more-btn">
                                            Learn More
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>)

                :

                <SignUp onSignUpClick={setIsLogin} />}



            {
                //<div className="App">
                //<button className="open-popup-btn" onClick={togglePopup}>
                //    Open Login Popup
                //</button>

                //{isOpen && (
                //    <div className="popup-overlay">
                //        <div className="popup">
                //            <img src={logo} alt="Logo" className="popup-logo" /> {/* Logo */}
                //            <div className="popup-title">Sign in</div>
                //            <div className="popup-title1">to access Invoice</div>
                //            <form>
                //                <div className="form-group">
                //                    <input
                //                        type="email"
                //                        id="email"
                //                        placeholder="Email address or mobile number"
                //                        className="input-field"
                //                        required
                //                    />
                //                </div>
                //                <div className="form-group">
                //                    <input
                //                        type="password"
                //                        id="password"
                //                        placeholder="Password"
                //                        className="input-field"
                //                        required
                //                    />
                //                </div>
                //                <button type="submit" className="login-btn">
                //                    Login
                //                </button>
                //                <div className="popup-title2">Don't have a Zoho account ? <span className="highlight-text">Sign up now</span></div>
                //            </form>
                //            {/*<button className="close-popup-btn" onClick={togglePopup}>*/}
                //            {/*    Close*/}
                //            {/*</button>*/}
                //        </div>
                //    </div>
                //)}
                //</div>

            }
        </>
    );
}

export default Login;
