import React from "react";
import { contact } from "../../assets/myinfo";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <h2 className="contact_title">CONTACT</h2>
      <a
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noopener norefferer"
      >
        <span type="button" className="buttons">
          email me
        </span>
      </a>
      <div className="user_links"></div>
    </section>
  );
};

export default Contact;
