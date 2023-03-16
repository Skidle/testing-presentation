import React, { useState } from 'react';

export const UserProfileEdit = ({ user, onSave }) => {
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        password: '',
    });
    const [errors, setErrors] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validate(formData);
        if (Object.keys(newErrors).length === 0) {
            onSave(formData);
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const validate = (data) => {
        const errors = {};
        if (!data.name) {
            errors.name = 'Name is required';
        }
        if (!data.email) {
            errors.email = 'Email is required';
        }
        if (!data.password) {
            errors.password = 'Password is required';
        }
        return errors;
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div>{errors.name}</div>}
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && <div>{errors.email}</div>}
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && <div>{errors.password}</div>}
            </div>
            <button type='submit'>Save</button>
        </form>
    );
};
