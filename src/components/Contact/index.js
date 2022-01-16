import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    function validateEmail(email) {
        let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    function handleChange(e) {
        if (e.target.name === 'email') {
            if(!validateEmail(e.target.value)) {
                setErrorMessage('Invalid email address');
            } else {
                setErrorMessage('');
            }
        } else if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`)
        } else {
            setErrorMessage('');
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    };

    return (
        <section className='mx-2' id="contact">
            <h2>Contact Me</h2>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type="text" name='name' onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='email'>Email Address</label>
                    <input type="text" name='email' onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor='message'>Message</label>
                    <textarea name='message' rows='3' onBlur={handleChange} />
                </div>
                {
                    errorMessage && (
                        <div id="contact-error">
                            <p className='error-text'>{errorMessage}</p>
                        </div>
                    )
                }
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;