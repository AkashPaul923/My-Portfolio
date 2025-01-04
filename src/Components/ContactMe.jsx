import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactMe = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(form);
        emailjs.sendForm('service_1mwkoln', 'template_6krjp6h', form.current, { publicKey: 'oYy2a2d_m8firz3yV', })
        .then( 
            () => {  console.log('SUCCESS!');}, 
            (error) => { console.log('FAILED...', error.text);},
        );
    };


  return (
    <div id="contact-section" className="bg-secondaryBg py-20">
        <h2 className="code-pro-font uppercase text-center font-bold text-primaryBtn text-3xl md:text-5xl mb-10">Contact Me</h2>
        <div className="max-w-screen-2xl mx-auto p-5 grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-10">
            {/* Email Section */}
            <div className="md:col-span-7 ">
                <form ref={form} onSubmit={sendEmail} className='max-w-xl grid grid-cols-12 gap-4'>
                    
                        <label className='text-lg col-span-3'>Name:</label>
                        <input type="text" name="from_name" class="input input-bordered input-accent w-full  bg-transparent col-span-9" />
    
                        <label className='text-lg col-span-3'>Email:</label>
                        <input type="email" name="from_email" class="input input-bordered input-accent w-full  bg-transparent col-span-9" />
                    
                        <label className='text-lg col-span-3'>Message:</label>
                        <textarea name="message" class="input input-bordered input-accent w-full  bg-transparent col-span-9"/>
                    
                    <input type="submit" value="Send" className='btn btn-accent col-span-12 w-full mt-5' />
                </form>
            </div>

            {/* Contact Information Section */}
            <div className="md:col-span-5 flex flex-col justify-center gap-4 pl-10 md:pl-0">
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
