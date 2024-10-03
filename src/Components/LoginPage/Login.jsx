import React from 'react';

import { useState } from 'react';
import logo from './images.png';
import SignUp from './SignUp';
import Home from '../HomePage/Home';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import axios from 'axios';
import AlertBox from '../AlertBox/AlertBox';
import { useAlert } from '../AlertBox/AlertContext';


function Login() {
    const [isOpen, setIsOpen] = useState(true);
    const [isLogin, setIsLogin] = useState(true);
    const [isLoginBtnClick, setIsLoginBtnClick] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const showAlert = useAlert();


    const handleEmailSubmit = (event) => {
        debugger
        event.preventDefault();
        //const user = document.getElementById('email');
        debugger
        const userName = email.trim();
        if (!email) {
            showAlert('warning', 'Please enter your email.');
            return;
        }
        axios.post('http://www.billing.somee.com/api/Login/LoginUserName', { userName: userName })
            .then(response => {
                if (response.data.message === 'This is Valid User.') {
                    showAlert('success', 'Email verified successfully!');
                    setIsEmailValid(true);

                } else {
                    showAlert('warning', 'Please enter a valid email.');
                }
            })
            .catch(error => {
                console.error('Email verification failed:', error.message);
                showAlert('error', 'Something went wrong! Please try again.');
            });
    };

    const handleLoginClick = (event) => {
        event.preventDefault();  // Prevent form submission and page reload
        debugger
        
        const userName = email.trim();
        const passwordTrim = password.trim();
        if (userName === '' && passwordTrim === '')
        {
            showAlert('warning', 'Please enter email address and password.');

        }
        else if (passwordTrim ==='')
        {
            showAlert('warning', 'Please enter password.');

        }
        else if (userName === '') {
            showAlert('warning', 'Please enter email address.');
        }
        else {
            axios.post('http://www.billing.somee.com/api/Login/LoginPassword', {
                "userName": userName,
                "password": passwordTrim
            })
                .then(response => {
                    if (response.data.message === 'This is Valid User.') {
                        showAlert('success', 'Logged in successfully!');
                        setIsLoginBtnClick(true);
                    } else {
                        showAlert('warning', 'Please enter valid username.')
                        setIsLoginBtnClick(false);
                    }
                    console.log('Login successful:', response.data);
                })
                .catch(error => {
                    console.error('Login failed:', error.message);
                    showAlert('error', 'Something went wrong!Please try again.')
                });
        }

    }   

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleClick = () => {
        setIsLogin(false);
    };
 
    return (
        <>
            

            {isLogin ?

                (isLoginBtnClick ? <><Home onSignUpClick={setIsLoginBtnClick} /> </> : < div className="overlay">
                    <div className="popup">
                        {/*<button className="close" onClick={() => console.log('Close Popup')}>*/}
                        {/*    &times;*/}
                        {/*</button>*/}
                        <div className="form-container">
                            <div className="form-section">
                                <img src={logo} alt="Logo" className="popup-logo" /> {/* Logo */}
                                <div className="popup-title">Sign in</div>
                                <div className="popup-title1">to access Invoice</div>
                                <form onSubmit={isEmailValid ? handleLoginClick : handleEmailSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            id="email"
                                            placeholder="Email address or mobile number"
                                            className="input-field"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    {isEmailValid && (
                                        <div className="form-group">
                                            <input
                                                type="password"
                                                id="password"
                                                placeholder="Password"
                                                className="input-field"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                        </div>)}

                                    <button type="submit" className="login-btn">
                                        {isEmailValid ? 'Login' : 'Verify Email'}
                                    </button>
                                    <div className="popup-title2">Don't have a Zoho account ? <span className="highlight-text" onClick={handleClick}>Sign up now</span></div>

                                    <div className="LoginIcon" style={{ position: 'absolute', marginLeft:'1.5vh',marginTop:'1%'}}>
                                        <ul className="wrapperL">
                                            <li className="icon facebook">
                                                <span className="tooltip">Facebook</span>
                                                <span><FaFacebookF /></span>
                                            </li>
                                            <li className="icon twitter">
                                                <span className="tooltip">Twitter</span>
                                                <span><FaTwitter /></span>
                                            </li>
                                            <li className="icon instagram">
                                                <span className="tooltip">Instagram</span>
                                                <span><FaInstagram /></span>
                                            </li>
                                            <li className="icon github">
                                                <span className="tooltip">Github</span>
                                                <span><FaGithub /></span>
                                            </li>
                                            <li className="icon youtube">
                                                <span className="tooltip">Youtube</span>
                                                <span><FaYoutube /></span>
                                            </li>
                                        </ul>
                                    </div>

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

        </>
    );
}

export default Login;
