import React from "react";
import styles from "@/styles/AboutCard.module.css";

interface CardsProps {
  icon: any;
  title: string;
  des: string;
}

const AboutCard = ({ icon, title, des }: CardsProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.header}>
        {icon}
        {title}
      </div>
      <div className={styles.des}>{des}</div>
    </div>
  );
};

export default AboutCard;
