import React from "react";
import styles from "@/styles/PricingCard.module.css";
import { FaCheck } from "react-icons/fa";

interface CardsProps {
  title: string;
  services: [];
  price: number;
}

const PricingCard = ({ title, services, price }: CardsProps) => {
  return (
    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      <div className={styles.services}>
        {services.map((card: any) => {
          return (
            <div key={card} className={styles.servicesItem}>
              <FaCheck className={styles.icon} />
              {card}
            </div>
          );
        })}
      </div>
      <div className={styles.price}>{price}$</div>
      <button type="button" className={styles.button}>
        Read more
      </button>
    </div>
  );
};

export default PricingCard;
