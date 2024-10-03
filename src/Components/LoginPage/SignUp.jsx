import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaYoutube } from 'react-icons/fa';
import { useAlert } from '../AlertBox/AlertContext';
import axios from 'axios';

Modal.setAppElement('#root');

function SignUp({ onSignUpClick }) {
    const [isOpen, setIsOpen] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        companyName: '',
        phoneNo: '',
        emailId: '',
        password: '',
        countryName: '',
    });
    const [isChecked, setIsChecked] = useState(false);
    const showAlert = useAlert();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked); // Toggle the checked state
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        debugger
      
        const companyName = formData.companyName.trim();
        const phoneNo = formData.phoneNo.trim();
        const emailId = formData.emailId.trim();
        const password = formData.password.trim();
        const countryName = formData.countryName.trim();

        if (companyName === '')
        {
            showAlert('warning', 'Please enter company name.');

        }
        else if (phoneNo === '') 
        {
            showAlert('warning', 'Please enter phone no.');

        }
        else if (emailId === '') 
        {
            showAlert('warning', 'Please enter email id.');
        }
        else if (password === '') 
        {
            showAlert('warning', 'Please enter password.');
        }
        else if (countryName === '') 
        {
            showAlert('warning', 'Please enter country name.');
        }
        else if (!isChecked)
        {
            showAlert('warning', 'Please agree to the Terms of Service and Privacy Policy..');

        }
        else
        {
            axios.post('https://www.billing.somee.com/api/Login/RegisterUser', {
                "userName": emailId,
                "emailId": emailId,
                "password": password,
                "phoneNo": phoneNo,
                "companyName": companyName,
                "countryName": countryName,
                "salt": "amol"
                })
                    .then(response => {
                        if (response.data.message === 'User Registered Successfully') {
                            showAlert('success', 'Registration successfully!');
                            handleChangeParentState();
                        } else {
                            showAlert('warning', 'Registration failed!')
                        }
                    })
                .catch(error => {
                    //console.error('Login failed:', error.response.data.message);
                    showAlert('warning', error.response.data.message)
                    });
            }
    };



    const togglePopup = () => {
        setIsOpen(!isOpen);
    };
    const handleChangeParentState = () => {
        // This function updates the parent's state using the setter function from props
        onSignUpClick(true);
    };
    return (
        <>
            {/* Full-screen background with overlay */}
            <div className="full-screen-background">
                <img src="zohoBackground.png" alt="Billing" className="background-image" />
                <div className="overlay1">
                    {isOpen && (
                        <div className="popup-container1">
                            <img src="b5.svg" alt="Small Logo" className="small-logo" />
                            {/*<h6 style={{ zIndex: 1, background: 'black' }}>ccccccccccccccccccccccccccccc</h6>*/}
                            {/*<h6 style={{ fontSize: '24px', color: 'red', marginTop: '10px', zIndex }}>*/}
                            {/*    Your Tagline or Description Here*/}
                            {/*</h6>*/}
                            <div>

                                <Modal
                                    isOpen={modalIsOpen}
                                    //onRequestClose={() => setModalIsOpen(false)} 
                                    className="modal"
                                    overlayClassName="overlayS"
                                // closeTimeoutMS={200} // Optional for a smoother closing
                                //shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
                                >
                                   
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            placeholder="Company Name*"
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="number"
                                            name="phoneNo"
                                            value={formData.phoneNo}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number*"
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="emailId"
                                            value={formData.emailId}
                                            onChange={handleInputChange}
                                            placeholder="Email Address*"
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleInputChange}
                                            placeholder="Password*"
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="countryName"
                                            value={formData.countryName}
                                            onChange={handleInputChange}
                                            placeholder="Country*"
                                            className="input-fieldS"
                                        />
                                        <div className="custom-div">
                                            Your data will be in INDIA data center. 
                                        </div>
                                        <div className="custom-div1">
                                            <input type="checkbox" id="dataCheckbox" checked={isChecked}
                                                onChange={handleCheckboxChange} />
                                            I agree to the<span className="highlight"> Terms of Service </span>and <span className="highlight"> Privacy Policy</span>.
                                        </div>

                                        <button type="submit" className="signup-btnS">Create Free Account</button>
                                        <div className="popup-titleS">Already have a account?<span className="highlight" onClick={handleChangeParentState}> Sign In </span></div>
                                    </form>
                                </Modal>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SignUp;




