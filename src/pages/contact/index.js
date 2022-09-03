import React from 'react';
import './contact.scss';
import bgContact from 'assets/images/bgContact.jpg';

function Contact() {
	return (
		<div className="contact">
			<div className="wrap-contact">
				<p>just say hey!</p>
				<h5>
					Send us
					<br />
					an Email.
				</h5>
				<div className="form-contact">
					<div className="d-flex">
						<div className="form__group field">
							<input
								type="input"
								className="form__field"
								placeholder="First Name"
								name="first-name"
								id="first-name"
								required
							/>
							<label for="first-name" className="form__label">
								Your first name
							</label>
						</div>
						<div className="form__group field">
							<input
								type="input"
								className="form__field"
								placeholder="Last Name"
								name="last-name"
								id="last-name"
								required
							/>
							<label for="last-name" className="form__label">
								Your last name
							</label>
						</div>
					</div>
					<div className="d-flex">
						<div className="form__group field">
							<input
								type="input"
								className="form__field"
								placeholder="Phone Number"
								name="phone-number"
								id="phone-number"
								required
							/>
							<label for="phone-number" className="form__label">
								Enter phone number
							</label>
						</div>
						<div className="form__group field">
							<input
								type="input"
								className="form__field"
								placeholder="Your Email"
								name="your-email"
								id="your-email"
								required
							/>
							<label for="your-email" className="form__label">
								Enter your email
							</label>
						</div>
					</div>
					<div>
						<div className="form__group field">
							<textarea
								type="input"
								className="form__field"
								placeholder="Your Message"
								name="your-message"
								id="your-message"
								required
							/>
							<label for="your-message" className="form__label">
								Enter your message...
							</label>
						</div>
					</div>
					<button>SEND EMAIL</button>
				</div>
			</div>
			<img className="BG" src={bgContact} />
		</div>
	);
}

export default Contact;
