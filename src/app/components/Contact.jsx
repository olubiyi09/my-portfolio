"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y9da19s",
        "template_1ejlc9l",
        form.current,
        "plRcS1k5uo0Ak-iNc"
      )
      .then(
        (result) => {
          toast.success("Message Sent");
        },
        (error) => {
          toast.error("Failed to send");
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact mt-20 pb-20 pt-10" id="contact1">
      <h1 className="flex justify-center text text-3xl mb-3">
        <span className=" myComponent">Contact Me</span>
      </h1>
      <div className="flex contact-details">
        <div className="">
          <div className="details-wrapper mt-10">
            <div className="card2">
              <h3>My Contact Information</h3>
              <p>
                Fill the form or contact me through other channels listed below,
                Thanks
              </p>
              <div className="icons mt-3">
                <span>
                  <FaPhoneAlt />
                  <p>+995 599 883 700</p>
                </span>

                <span>
                  <FaEnvelope />
                  <p>olubiyi09@gmail.com</p>
                </span>
                <span>
                  <FaLocationArrow />
                  <p>Tbilisi, Georgia</p>
                </span>
                <span>
                  <FaTwitter />
                  <p>@its_Seyistrings</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your email"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message"
            ></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contact;
