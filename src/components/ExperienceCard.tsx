import React from "react";
import styles from "@/styles/ExperienceCard.module.css";
import Link from "next/link";
import Image from "next/image";
import image from "@/../../public/assets/concert.png";

interface CardsProps {
  title: string;
  subtitle: string;
  des: string;
  link: string;
}

const ExperienceCard = ({ title, subtitle, des, link }: CardsProps) => {
  return (
    <div className={styles.body}>
      <Image
        src={image}
        alt="picture"
        priority
        width={640}
        height={427}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <p className={styles.text}>{des}</p>
      <Link href={link} className={styles.link}>
        <button type="button" className={styles.button}>
          Read more
        </button>
      </Link>
    </div>
  );
};

export default ExperienceCard;
