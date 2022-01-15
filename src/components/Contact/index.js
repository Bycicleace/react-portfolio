import React, { useState } from 'react';

function Contact() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }
    return (
        <section id="contact">
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
                <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default Contact;