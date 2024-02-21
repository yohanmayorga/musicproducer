import React from "react";
import styles from "@/styles/Contact.module.css";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className={styles.body}>
      <h3>Contact</h3>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut aliquam
        atque, neque quis voluptatum quam dolore vitae, cupiditate, blanditiis
        officia? Perferendis officia aut aliquam, non ullam corporis laudantium
        itaque.
      </p>
      <input type="text" placeholder="Subject" className={styles.input} />
      <textarea placeholder="Your message" className={styles.input} />
      <button className={styles.contact}>
        <FaRegEnvelope />
        Contact
      </button>
    </div>
  );
};

export default Contact;
