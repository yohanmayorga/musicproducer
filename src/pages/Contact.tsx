import React from "react";
import styles from "@/styles/Contact.module.css";
import { FaRegEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className={styles.body}>
      <div className={styles.left}>
        <h2 className={styles.leftTitle}>What comes next?</h2>
        <p className={styles.leftText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi omnis
          architecto molestiae doloribus suscipit iste assumenda nulla in nisi
          incidunt culpa laboriosam nesciunt temporibus inventore ullam, ex
          dolore enim eius.
        </p>
        <p className={styles.leftText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi omnis
          architecto molestiae doloribus suscipit iste assumenda nulla in nisi
          incidunt culpa laboriosam nesciunt temporibus inventore ullam, ex
          dolore enim eius.
        </p>
      </div>
      <div className={styles.right}>
        <h3>Contact</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ut aliquam
          atque, neque quis voluptatum quam dolore vitae, cupiditate, blanditiis
          officia? Perferendis officia aut aliquam, non ullam corporis
          laudantium itaque.
        </p>
        <h4>Your information</h4>
        <input
          type="text"
          name="name"
          placeholder="Subject"
          autoComplete="off"
          className={styles.input}
        />
        <h4>Your Message</h4>
        <textarea
          name="message"
          autoComplete="off"
          placeholder="Your message"
          className={styles.input}
        />
        <button className={styles.contact}>
          <FaRegEnvelope />
          Contact
        </button>
      </div>
    </div>
  );
};

export default Contact;
