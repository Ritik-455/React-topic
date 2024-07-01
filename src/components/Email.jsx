import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mb9oget', 'template_wkvwxp9', form.current, {
                publicKey: 'q2_RxnxEOd_UfttSm',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="Name" />
                <label>Email</label>
                <input type="email" name="Email" />
                <label>Message</label>
                <textarea name="Message" />
                <input type="submit" value="Send" />
            </form>
        </>
    )
}

export default Email