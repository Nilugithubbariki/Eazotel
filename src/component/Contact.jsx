import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <section class="contact-sec sec-pad">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <div class="contact-detail">
                <h1 class="section-title">Get in Touch</h1>

                <ul class="contact-ul">
                  <li>
                    <i class="fa fa-location-dot"></i> XXXXXXXXXX,location,XXXX
                  </li>

                  <li>
                    <i class="fa fa-phone"></i>
                    <a href="tel:08510004495">
                      <b>0255000XXXX</b>
                    </a>
                    ,
                    <a href="tel:08510005495">
                      <b>0251600XXXX</b>
                    </a>
                  </li>

                  <li>
                    <i class="fa-solid fa-envelope"></i>
                    <a href="mailto:pardeepkumar4bjp@gmail.com">
                      <b> XXXXX@gmail.com</b>
                    </a>
                  </li>
                </ul>

                <span>
                  <a href="#" class="fb">
                    <i class="fa-brands fa-facebook"></i>
                  </a>
                  <a href="#" class="insta">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </span>
              </div>
            </div>

            <div class="col-md-6">
              <form action="#" class="contFrm" method="POST">
                <div class="row">
                  <div class="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      class="inptFld"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      class="inptFld"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      class="inptFld"
                      required
                    />
                  </div>

                  <div class="col-sm-6">
                    <input
                      type="text"
                      name="sub"
                      placeholder="Subject"
                      class="inptFld"
                      required
                    />
                  </div>

                  <div class="col-12">
                    <textarea
                      class="inptFld"
                      rows=""
                      cols=""
                      placeholder="Your Message..."
                      required
                    ></textarea>
                  </div>
                  <div class="col-12">
                    <input
                      type="submit"
                      name="submit"
                      value="SUBMIT"
                      class="inptBtn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
