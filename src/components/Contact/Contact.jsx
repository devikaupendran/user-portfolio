import React from 'react'
import './Contact.css'
import mailIcon from '../../assets/mail_icon.svg'
import locationIcon from '../../assets/location_icon.svg'
import callIcon from '../../assets/call_icon.svg'
import Swal from 'sweetalert2'

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            Swal.fire({
                title: 'Success',
                text: 'Your mail has been sended',
                icon: 'success',
                confirmButtonText: 'OK'
            })
        }
    };

    //rendering
    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            {/* ----------contact container----------  */}
            <div className="contact-section">

                {/* ---------------------------- LEFT Section ---------------------------- */}
                <div className="contact-left">

                    <h1>Let's talk</h1>
                    <p>Thank you for visiting my portfolio! Feel free to reach out. I’d love to hear from you!</p>
                    <div className="contact-details">

                        {/*------- email id  -------*/}
                        <div className="detail">
                            <img src={mailIcon} alt="mail icon" />
                            <p>vijay.devm3@gmail.com</p>
                        </div>

                        {/* ------- phone number ------- */}
                        <div className="detail">
                            <img src={callIcon} alt="call icon" />
                            <p>9744886068</p>
                        </div>

                        {/*------- location ------- */}
                        <div className="detail">
                            <img src={locationIcon} alt="location icon" />
                            <p>Varkala, Thiruvananthapuram, Kerala</p>
                        </div>
                    </div>
                </div>

                {/* -------------------------- RIGHT Section ----------------------------- */}
                <form onSubmit={onSubmit} className="contact-right">

                    {/* ------ name ------- */}
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />

                    {/* ------ Email ------- */}
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />

                    {/* ------ Message ------- */}
                    <label htmlFor="">Write your message here</label>
                    <textarea placeholder='Enter your message' rows='8' name='message' />

                    {/* ------ Submit Btn ------- */}
                    <button className="contact-submit" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
