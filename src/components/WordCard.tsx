import React from "react";
import styles from "@/styles/WorkCard.module.css";
import { FaLocationArrow } from "react-icons/fa";

interface CardsProps {
  title: string;
  des: string;
}

const WorkCard = ({ title, des }: CardsProps) => {
  return (
    <div className={styles.body}>
      <FaLocationArrow className={styles.icon} />

      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.des}>{des}</div>
        <button type="button" className={styles.button}>
          Read more
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
