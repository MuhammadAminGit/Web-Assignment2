import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa"; // Import FontAwesome icons
import Map from "./Map";
import ContactItem from "./ContactItem";

const ContactForm = () => {
	return (
		<section id="contact" className="contact section py-16">
			{/* Section Title */}
			<div
				className="container mx-auto text-center mb-8"
				data-aos="fade-up"
			>
				<h2 className="text-3xl font-semibold text-gray-800">
					Contact
				</h2>
				<p className="text-gray-500">Contact Us</p>
			</div>

			{/* Google Map */}
			<Map />

			<div
				className="container mx-auto"
				data-aos="fade-up"
				data-aos-delay="100"
			>
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					{/* Contact Information */}
					<div className="space-y-8">
						<ContactItem
							icon={FaMapMarkerAlt} 
							title="Location"
							description="A108 Adam Street, New York, NY 535022"
						/>
						<ContactItem
							icon={FaClock} 
							title="Open Hours"
							description="Monday-Saturday: 11:00 AM - 11:00 PM"
						/>
						<ContactItem
							icon={FaPhone} 
							title="Call Us"
							description="+1 5589 55488 55"
						/>
						<ContactItem
							icon={FaEnvelope} 
							title="Email Us"
							description="info@example.com"
						/>
					</div>

					{/* Contact Form */}
					<div className="lg:col-span-2">
						<form
							action="forms/contact.php"
							method="post"
							className="space-y-6"
							data-aos="fade-up"
							data-aos-delay="200"
						>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<input
									type="text"
									name="name"
									className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Your Name"
									required
								/>
								<input
									type="email"
									name="email"
									className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
									placeholder="Your Email"
									required
								/>
							</div>
							<input
								type="text"
								name="subject"
								className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
								placeholder="Subject"
								required
							/>
							<textarea
								className="form-control w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"
								name="message"
								rows="6"
								placeholder="Message"
								required
							></textarea>
							<div className="text-center">
								<button
									type="submit"
									className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md focus:outline-none focus:ring-4 focus:ring-blue-300"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
