import React from "react";
import styles from "@/styles/AboutCard.module.css";

interface CardsProps {
  image: any;
  title: string;
  des: string;
  link: string;
}

const AboutCard = ({ image, title, des, link }: CardsProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {image}
        {title}
      </div>
      <div className={styles.des}>{des}</div>
    </div>
  );
};

export default AboutCard;
