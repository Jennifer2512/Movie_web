import React, { useRef } from 'react';
import './contact.scss';
import bgContact from 'assets/images/bgContact.jpg';
import emailjs from '@emailjs/browser';

function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_a9ml277',
				'template_vof1qar',
				form.current,
				'oJXXqtiYbmmsgYEu2'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='contact'>
			<div className='wrap-contact container'>
				<p>just say hey!</p>
				<h5>
					Send us
					<br />
					an Email.
				</h5>
				<form className='form-contact' ref={form} onSubmit={sendEmail}>
					<div className='d-flex'>
						<div className='form__group field'>
							<input
								type='input'
								className='form__field'
								placeholder='Your Name'
								name='name'
								id='name'
								required
							/>
							<label htmlFor='name' className='form__label'>
								Your name
							</label>
						</div>
						<div className='form__group field'>
							<input
								type='input'
								className='form__field'
								placeholder='Your Email'
								name='email'
								id='email'
								required
							/>
							<label htmlFor='email' className='form__label'>
								Your email
							</label>
						</div>
					</div>
					<div>
						<div className='form__group field'>
							<textarea
								type='input'
								className='form__field'
								placeholder='Your Message'
								name='message'
								id='message'
								required
							/>
							<label htmlFor='message' className='form__label'>
								Enter your message...
							</label>
						</div>
					</div>
					<button type='submit'>SEND EMAIL</button>
				</form>
			</div>
			<img className='BG' src={bgContact} />
		</div>
	);
}

export default Contact;
