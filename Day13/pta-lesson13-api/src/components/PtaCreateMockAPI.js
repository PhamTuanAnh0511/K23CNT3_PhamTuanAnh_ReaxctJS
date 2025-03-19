import React, { useState } from 'react';
import axios from 'axios';

export default function PtaCreateMockAPI() {
    // Initialize state
    const [ptaFullName, setPtaFullName] = useState('');
    const [ptaAge, setPtaAge] = useState('');
    const [ptaActive, setPtaActive] = useState(true);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // API post URL
    const ptaCreateUserApi = "https://67da77a535c87309f52ca47b.mockapi.io/K23CNT3-PhamTuanAnh/pta_users";

    // Handle form submit
    const ptaHandleSubmit = (event) => {
        event.preventDefault();

        // Simple validation
        if (!ptaFullName || !ptaAge || ptaAge <= 0 || isNaN(ptaAge)) {
            setError('Please provide valid name and age.');
            setSuccess('');
            return;
        }

        // Prepare the user data
        let ptaNewUser = { ptaFullName, ptaAge, ptaActive };
        console.log(ptaNewUser);

        // Send data to API
        axios.post(ptaCreateUserApi, ptaNewUser)
            .then((pta_response) => {
                console.log("User created successfully:", pta_response);
                setSuccess('User created successfully!');
                setError('');
                // Clear form after successful submission
                setPtaFullName('');
                setPtaAge('');
                setPtaActive(true);
            })
            .catch((error) => {
                console.error("There was an error creating the user:", error);
                setError('There was an error creating the user.');
                setSuccess('');
            });
    };

    // Handle radio button change
    const handleRadioChange = (ev) => {
        setPtaActive(ev.target.value === 'true');
    };

    return (
        <div className='container mt-4'>
            <h2 className='text-center mb-4'>Thêm mới người dùng</h2>

            {error && <div className='alert alert-danger'>{error}</div>}
            {success && <div className='alert alert-success'>{success}</div>}

            <form onSubmit={ptaHandleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="ptaFullName" className='form-label'>Full Name</label>
                    <input
                        type='text'
                        className='form-control'
                        name='ptaFullName'
                        id="ptaFullName"
                        value={ptaFullName}
                        onChange={(ev) => setPtaFullName(ev.target.value)}
                        placeholder='Enter full name'
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="ptaAge" className='form-label'>Age</label>
                    <input
                        type='number'
                        className='form-control'
                        name='ptaAge'
                        id="ptaAge"
                        value={ptaAge}
                        onChange={(ev) => setPtaAge(ev.target.value)}
                        placeholder='Enter age'
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor="ptaActive" className='form-label'>Active</label>
                    <div>
                        <input
                            type='radio'
                            name='ptaActive'
                            id="ptaActive_hd"
                            value='true'
                            checked={ptaActive === true}
                            onChange={handleRadioChange}
                            className='form-check-input me-2'
                        />
                        <label htmlFor="ptaActive_hd" className='form-check-label'>Hoạt động</label>
                    </div>
                    <div>
                        <input
                            type='radio'
                            name='ptaActive'
                            id="ptaActive_kh"
                            value='false'
                            checked={ptaActive === false}
                            onChange={handleRadioChange}
                            className='form-check-input me-2'
                        />
                        <label htmlFor="ptaActive_kh" className='form-check-label'>Khóa</label>
                    </div>
                </div>

                <div className='text-center'>
                    <button type="submit" className='btn btn-primary'>Create</button>
                </div>
            </form>
        </div>
    );
}
