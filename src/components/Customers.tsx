import React from "react";
import styles from "@/styles/Customers.module.css";
import Image from "next/image";

interface CardsProps {
  des: string;
  name: string;
  title: string;
  photo: any;
}

const Customers = ({ des, name, title, photo }: CardsProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.des}>{des}</div>
      <div className={styles.photo}>
        <Image
          src={photo}
          alt="picture"
          width={150}
          height={150}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Customers;
