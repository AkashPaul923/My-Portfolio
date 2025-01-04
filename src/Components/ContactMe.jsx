import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {
  return (
    <div className="bg-secondaryBg py-12">
        <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">Contact Me</h2>
        <div className="max-w-screen-2xl mx-auto p-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Email Section */}
            <div className=" md:p-6">
                <form className="card-body border border-primaryBtn rounded-lg">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" placeholder="Write Your email" className="input input-bordered bg-primaryBg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email Body</span>
                        </label>
                        <textarea  placeholder="Write Email Body" className="input input-bordered bg-primaryBg" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-accent bg-primaryBtn">Send email</button>
                    </div>
                </form>
            </div>

            {/* Contact Information Section */}
            <div className=" flex flex-col justify-center gap-4 p-10">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="flex items-center mb-4">
                        <FaMapMarkerAlt className="text-primaryBtn text-2xl mr-3" />
                        <span className="">Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaEnvelope className="text-primaryBtn text-2xl mr-3" />
                        <span className="">akashpaul923@gmail.com</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaPhoneAlt className="text-primaryBtn text-2xl mr-3" />
                        <span className="">+880 1518363746</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <FaWhatsapp className="text-green-500 text-2xl mr-3" />
                        <span className="">+880 1518363746</span>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default ContactMe;
