import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function SignUp({ onSignUpClick }) {
    const [isOpen, setIsOpen] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [formData, setFormData] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        setModalIsOpen(false);
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
                                            name="field1"
                                            value={formData.field1}
                                            onChange={handleInputChange}
                                            placeholder="Company Name"
                                            required
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="field2"
                                            value={formData.field2}
                                            onChange={handleInputChange}
                                            placeholder="Phone Number"
                                            required
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="field3"
                                            value={formData.field3}
                                            onChange={handleInputChange}
                                            placeholder="Email Address"
                                            required
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="field4"
                                            value={formData.field4}
                                            onChange={handleInputChange}
                                            placeholder="Password"
                                            required
                                            className="input-fieldS"
                                        />
                                        <input
                                            type="text"
                                            name="field5"
                                            value={formData.field5}
                                            onChange={handleInputChange}
                                            placeholder="Country"
                                            required
                                            className="input-fieldS"
                                        />
                                        <div className="custom-div">
                                            Your data will be in INDIA data center. 
                                        </div>
                                        <div className="custom-div1">
                                            <input type="checkbox" id="dataCheckbox"/>
                                            I agree to the<span className="highlight"> Terms of Service </span>and <span className="highlight"> Privacy Policy</span>.
                                        </div>

                                        <button type="submit" className="signup-btnS">Create Free Account</button>
                                        <div className="popup-titleS">Already have a account?<span className="highlight" onClick={handleChangeParentState}> Sign In </span></div>

                                        {/*<button type="button" onClick={() => setModalIsOpen(false)} className="close-btnS">Close</button>*/}
                                    </form>
                                </Modal>
                            </div>

                            {/*<div className="popup1">*/}
                            {/*    <form>*/}
                            {/*        <div className="form-group1">*/}
                            {/*            <input*/}
                            {/*                type="text"*/}
                            {/*                id="username"*/}
                            {/*                placeholder="Username"*/}
                            {/*                className="input-field1"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="form-group1">*/}
                            {/*            <input*/}
                            {/*                type="email"*/}
                            {/*                id="email"*/}
                            {/*                placeholder="Email"*/}
                            {/*                className="input-field1"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <div className="form-group1">*/}
                            {/*            <input*/}
                            {/*                type="password"*/}
                            {/*                id="password"*/}
                            {/*                placeholder="Password"*/}
                            {/*                className="input-field1"*/}
                            {/*                required*/}
                            {/*            />*/}
                            {/*        </div>*/}
                            {/*        <button type="submit" className="signup-btn">*/}
                            {/*            Sign Up*/}
                            {/*        </button>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SignUp;
