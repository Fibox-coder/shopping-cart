import React from "react";

function Contact() {
  return (
    <main className="contact-wrapper">
      <div className="image-wrapper">
        <a
          href="https://github.com/Fibox-coder?tab=repositories"
          target="blank"
        >
          <img
            className="contact-icons"
            src="/images/github.png"
            alt="Github Icon"
          />
        </a>
        <a href="#">
          <img
            className="contact-icons"
            src="/images/facebook.png"
            alt="Github Icon"
          />
        </a>
        <a href="#">
          <img
            className="contact-icons"
            src="/images/youtube.png"
            alt="Github Icon"
          />
        </a>
        <a href="#">
          <img
            className="contact-icons"
            src="/images/twitter.png"
            alt="Github Icon"
          />
        </a>
        <a href="#">
          <img
            className="contact-icons"
            src="/images/instagram.png"
            alt="Github Icon"
          />
        </a>
      </div>
      <div className="text-wrapper">
        <h5>FashionPoint</h5>
        <h5>Coders Street 1338, Eindhoven, The Netherlands</h5>
      </div>
      <img
        className="background"
        src="/images/background-wave.png"
        alt="Github Icon"
      />
    </main>
  );
}

export default Contact;
