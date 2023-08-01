import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import NavbarContact from "../navbars/NavbarContact";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const btn = document.getElementById("button");

  const validateForm = () => {
    const errors = {};

    if (!form.current.user_name.value.trim()) {
      errors.user_name = "Name field is required";
    }

    if (!form.current.user_email.value.trim()) {
      errors.user_email = "Email is required";
    } else if (
      !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/i.test(
        form.current.user_email.value
      )
    ) {
      errors.user_email = "Invalid email format";
    }

    if (!form.current.user_phone.value.trim()) {
      errors.user_phone = "Telephone is required";
    } else if (!/^\d{11}$/i.test(form.current.user_phone.value)) {
      errors.user_phone =
        "Invalid telephone number. Please enter a 11-digit number";
    }

    // Add more validation for other fields if needed

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    btn.textContent = "Sending...";

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "dW7qJgXGZYE4086Sx"
      )
      .then(
        () => {
          btn.textContent = "Send Email";
          alert("Sent Successfully!");
          // Clear the form fields
          form.current.reset();
          // Clear the error messages
          setErrors({});
        },
        (err) => {
          btn.textContent = "Send Email";
          alert(JSON.stringify(err));
        }
      );
  };

  // Scroll To top
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <NavbarContact />
      <section className="container">
        <div className="return-link">
          <Link onClick={goBack}>
            <FaAngleLeft /> Go Back
          </Link>
        </div>

        <h3 className="productCards-heading mb-5">CONTACT US</h3>

        <div className="grid4form">
          <div className="info">
            <h6 className="mb-4">
              Want to make enquiries? get in touch with us! We'd love to hear
              from you. Whether you have questions about our artworks,
              collaborations, or just want to share your thoughts, feel free to
              reach out. Our team is here to assist and connect with art
              enthusiasts like you.
            </h6>

            <p>+234-817-3551-411, +234-817-1375-644</p>
            <p>adaogroup@outlook.com</p>
            <p>Lagos State, Nigeria</p>

            <div className="links-column">
              <Link
                to="mailto:adaogroup@outlook.com"
                target="_blank"
                rel="noreferrer"
                className="socials"
              >
                <span
                  className="tt"
                  data-bs-placement="bottom"
                  title="Send us a mail"
                >
                  <AiOutlineMail />
                </span>
              </Link>
              <Link
                to="https://web.facebook.com/profile.php?id=100077348396583"
                target="_blank"
                rel="noreferrer"
                className="socials"
              >
                <span
                  className="tt"
                  data-bs-placement="bottom"
                  title="Visit Us On Facebook"
                >
                  <FiFacebook />
                </span>
              </Link>
              <Link
                to="https://www.instagram.com/adao_group"
                target="_blank"
                rel="noreferrer"
                className="socials"
              >
                <span
                  className="tt"
                  data-bs-placement="bottom"
                  title="Visit Us On Instagram"
                >
                  <FiInstagram />
                </span>
              </Link>
              <Link
                to="https://www.linkedin.com/in/adao-group-427b46217"
                target="_blank"
                rel="noreferrer"
              >
                <span
                  className="tt"
                  data-bs-placement="bottom"
                  title="Check Us Out On LinkedIn"
                >
                  <FaLinkedinIn />
                </span>
              </Link>
            </div>
          </div>

          <form id="contact-form" ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <div className="field">
              <label htmlFor="user_name">Full Names*</label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="e.g. John Doe"
              />
              {errors.user_name && (
                <p className="form-error-message">{errors.user_name}</p>
              )}
            </div>
            <div className="field">
              <label htmlFor="user_email">Email Address*</label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="e.g. johndoe@example.com"
              />
              {errors.user_email && (
                <p className="form-error-message">{errors.user_email}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="user_phone">Contact No.*</label>
              <input
                type="tel"
                name="user_phone"
                id="user_phone"
                placeholder="e.g. 08123456789"
              />
              {errors.user_phone && (
                <p className="form-error-message">{errors.user_phone}</p>
              )}
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>

              <textarea
                name="message"
                id=""
                cols="40"
                rows="3"
                placeholder="Write something..."
              ></textarea>
            </div>

            <button id="button" onClick={sendEmail} className="btn form-btn">
              Send Email
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
