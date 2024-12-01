import React, { useRef } from 'react';
import "./Contact.css";
import img from "../../assets/form.png";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import bg from"../../assets/form-bg.jpg"

function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message send")
    const name = formRef.current.from_name.value;
    const email = formRef.current.to_name.value;
    const message = formRef.current.message.value;
    console.log(name, email, message);

    e.preventDefault();

    emailjs.sendForm('service_ela9c5i', 'template_xih6c6l', formRef.current, 'lUmBuorJ3UzBvNMzr')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  };

  return (
    <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className='unique-herosection pt-[4.5rem] h-screen  unique-body'>
      <div className="unique-form-page">
        <div className='flex justify-center scale-90 items-center my-[5rem] shadow-2xl bg-slate-50 rounded-3xl'>
          <img className='' src={img} alt="" />
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='unique-form shadow-2xl border-2 scale-105 border-black bg-gradient-to-r from-orange-300 to-rose-300 rounded-3xl'
          >
            <h1 className="title text-center mb-4">Contact Us</h1>

            {/* Name */}
            <div className="unique-form-group position-relative">
              <label htmlFor="unique-formName" className="d-block">
                <i className="icon" data-feather="user"></i>
              </label>
              <input
                type="text"
                id="unique-formName"
                name="from_name"
                className="unique-form-control w-[320px] rounded-full py-2 px-4 unique-form-control-lg thick"
                placeholder="Name"
                required
              />
            </div>

            {/* E-mail */}
            <div className="unique-form-group position-relative">
              <label htmlFor="unique-formEmail" className="d-block">
                <i className="icon" data-feather="mail"></i>
              </label>
              <input
                type="email"
                id="unique-formEmail"
                name="to_name"
                className="unique-form-control w-[320px] rounded-full py-2 px-4 unique-form-control-lg thick"
                placeholder="E-mail"
                required
              />
            </div>

            {/* Message */}
            <div className="unique-form-group message">
              <textarea
                id="unique-formMessage"
                name="message"
                className="unique-form-control rounded-3xl py-2 px-4 unique-form-control-lg"
                rows="7"
                placeholder="Message"
                required
              ></textarea>
            </div>

            {/* Submit btn */}
            <div className="text-center">
              <button type="submit" className=" bg-orange-500 px-6 rounded-full text-white font-semibold hover:bg-orange-600 delay-50 text-xl py-2 " tabIndex="-1">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
