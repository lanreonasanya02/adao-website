import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbars/Navbar";
// import "../contact/Contact.css";

const Contact = () => {
  return (
    <main>
      <Navbar />
      <section className="contact-page">
        <div class="text">
          <h3>CONTACT</h3>
        </div>
      </section>

      <section class="text-center contact">
        <h2 class="fw-bold">
          Ge<span class="get-in-touch">t In Tou</span>ch
        </h2>
        <h5 class="fw-bold">CALL US</h5>
        <h6>+44 (0) 1392 576 940</h6>
        <h5 class="fw-bold">ADDRESS</h5>
        <h6>
          Unit 7a, Cranmere Court,
          <br />
          Matford Business Park,
          <br />
          Exeter, DEVON.
          <br />
          EX2 8PW. UNITED KINGDOM
        </h6>

        <h4>
          <Link to="#"> Send a Message</Link>
        </h4>
      </section>

      <article class="container">
        <div class="links fw-bold">
          <Link to="#">BOOK A DEMO</Link>
          <br />
          <Link to="#">ADD YOUR COMPANY</Link>
          <br />
          <Link to="#">PRIVACY & COOKIES</Link>
          <br />
          <Link to="#">TERMS & CONDITIONS</Link>
          <br />
          <Link to="#">CONTACT</Link>
          <br />
          <Link to="#">SUPPLIER LOGIN</Link>
          <br />
          <Link to="#">SITE MAP</Link>
        </div>
        <div class="unit">
          <h6 class="fw-bold">
            UNIT 7A
            <br />
            CRANMERE COURT
            <br />
            MATFORD BUSINESS PARK
            <br />
            EXETER
            <br />
            DEVON
            <br />
            EX2 8PW
          </h6>
        </div>
        <div class="contact-hotel">
          <h4>Contact Hotel Supplier</h4>
          <form action="">
            <input type="text" name="name" placeholder="NAME*" id="box" />
            <br />
            <br />
            <input
              type="tel"
              name="phone-number"
              placeholder="PHONE*"
              id="box"
            />
            <br />
            <br />
            <input type="email" name="email" placeholder="EMAIL*" id="box" />
            <br />
            <br />
            <textarea rows="10" cols="20" placeholder="MESSAGE"></textarea>

            <div class="checkbox">
              <h6>
                <input type="checkbox" name="checkbox" /> SIGN ME UP TO YOUR
                MAILING LIST! I ACCEPT YOUR PRIVACY POLICY
              </h6>
            </div>

            <h3 class="text-center mt-5">
              <Link to="#">Send</Link>
            </h3>
          </form>
        </div>
      </article>
    </main>
  );
};

export default Contact;
