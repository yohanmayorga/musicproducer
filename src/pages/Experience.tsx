import React from "react";
import styles from "@/styles/Experience.module.css";
import speaker from "@/../../public/assets/speaker.png";
import Image from "next/image";

const Experience = () => {
  return (
    <div id="experience" className={styles.body}>
      <div className={styles.mainBox}>
        <h1 className={styles.title}>Title</h1>
        <h3 className={styles.subtitle}>Subtitle</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni odit
          asperiores provident ipsum? Porro, esse eligendi. Accusantium
          obcaecati animi nobis veniam vitae dolores possimus iusto eaque.
          Tempora beatae nesciunt laudantium.
        </p>
      </div>
    </div>
  );
};

export default Experience;
