import React, { useState } from 'react';

function Customer() {
    const [formData, setFormData] = useState({
        option: '',
        dropdown: '',
        input1: '',
        input2: '',
        input3: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    return (
        <>


            <div className="container" style={{ paddingLeft: '10px', paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#ffffff', borderRadius: '5px' }}>
                <div className="row" style={{ marginLeft: '3px', position: 'sticky', top: '0', backgroundColor: '#ffffff', zIndex: 10 }}>
                    <div className="popup-title">New Customer</div>

                 
                </div>

        

                <div className="row input-row mt-3">
                    <div className="col-3">
                        <p>
                            Customer Type
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="customerType"
                                    value="Business"
                                    checked={formData.customerType === 'Business'}
                                    onChange={handleChange}
                                /> Business
                            </label>
                            <label className="ms-3">
                                <input
                                    type="radio"
                                    name="customerType"
                                    value="Individual"
                                    checked={formData.customerType === 'Individual'}
                                    onChange={handleChange}
                                /> Individual
                            </label>
                        </div>


                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Industry
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-9">
                        <div className="row align-items-center">
                            <div className="col-md-2">
                                <select name="salutation" value={formData.salutation} onChange={handleChange} className="form-select">
                                    <option value="">Salutation</option>
                                    <option value="Mr.">Mr.</option>
                                    <option value="Ms.">Ms.</option>
                                    <option value="Mrs.">Mrs.</option>
                                </select>
                            </div>

                            <div className="col-md-5">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="col-md-5">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="form-control"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-3"></div>
                </div>

                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Organisation Location
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Organisation Location"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Organisation Address
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Organisation Address"
                            style={{ marginBottom: '10px' }}
                        />
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Organisation Address"
                        />
                        <div className="col-3">
                            <input
                                type="text"
                                className="form-control rounded-input"
                                placeholder="City"
                            />
                        </div>
                        <div className="col-3">
                            <input
                                type="text"
                                className="form-control rounded-input"
                                placeholder="Pin Code"
                            />
                        </div>
                    </div>
                    <div className="col-3"></div>
                </div>

                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>
                <div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div><div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div><div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div><div className="row input-row">
                    <div className="col-3">
                        <p>
                            Website Url
                            <span style={{ color: 'red' }}>*</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="form-control rounded-input"
                            placeholder="Enter Website Url"
                        />
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>

            <div className="popup-title">New Customer</div>

          
            <div className="container">
                <form>
                    {/* Customer Type */}
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Customer Type</label>
                        <div className="col-sm-10 d-flex align-items-center">
                            <input
                                type="radio"
                                id="option1"
                                name="option"
                                value="Option 1"
                                onChange={handleChange}
                                className="me-2"
                            />
                            <label htmlFor="option1" className="me-4">Option 1</label>

                            <input
                                type="radio"
                                id="option2"
                                name="option"
                                value="Option 2"
                                onChange={handleChange}
                                className="me-2"
                            />
                            <label htmlFor="option2">Option 2</label>
                        </div>
                    </div>

                    {/* Select an Option */}
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Select an Option</label>
                        <div className="col-sm-10">
                            <select
                                name="dropdown"
                                value={formData.dropdown}
                                onChange={handleChange}
                                className="form-select"
                            >
                                <option value="">Choose...</option>
                                <option value="Option A">Option A</option>
                                <option value="Option B">Option B</option>
                                <option value="Option C">Option C</option>
                            </select>
                        </div>
                    </div>

                    {/* Input Fields */}
                    <div className="row mb-3">
                        <label className="col-sm-2 col-form-label">Input Fields</label>
                        <div className="col-sm-10 d-flex">
                            <input
                                type="text"
                                id="input1"
                                name="input1"
                                onChange={handleChange}
                                className="form-control me-2"
                                placeholder="Input 1"
                            />
                            <input
                                type="text"
                                id="input2"
                                name="input2"
                                onChange={handleChange}
                                className="form-control me-2"
                                placeholder="Input 2"
                            />
                            <input
                                type="text"
                                id="input3"
                                name="input3"
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Input 3"
                            />
                        </div>
                    </div>
                </form>
            </div>


        </>
    );
}

export default Customer;
