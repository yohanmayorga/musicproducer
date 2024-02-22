import React from "react";
import styles from "@/styles/Pricing.module.css";
import PricingCard from "@/components/PricingCard";
import Contact from "./Contact";

const Pricing = () => {
  const cards = [
    {
      title: "Plan Intro",
      services: [
        "Example of service 1",
        "Example of service 2",
        "Example of service 3",
        "Example of service 4",
        "Example of service 5",
      ],
      price: 95,
    },
    {
      title: "Plan Base",
      services: [
        "Example of service 1",
        "Example of service 2",
        "Example of service 3",
        "Example of service 4",
        "Example of service 5",
      ],
      price: 123,
    },
    {
      title: "Plan Pro",
      services: [
        "Example of service 1",
        "Example of service 2",
        "Example of service 3",
        "Example of service 4",
        "Example of service 5",
      ],
      price: 300,
    },
    {
      title: "Plan Expert",
      services: [
        "Example of service 1",
        "Example of service 2",
        "Example of service 3",
        "Example of service 4",
        "Example of service 5",
      ],
      price: 499,
    },
  ];
  return (
    <div id="pricing" className={styles.body}>
      <div className={styles.background}></div>
      <div className={styles.header}>
        <h3 className={styles.title}>The right plan for you.</h3>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
          qui. Molestiae vero, tempora dolore fuga voluptatem sequi sed totam
          assumenda saepe fugiat. Eveniet facilis ex voluptatibus! Magni
          provident nemo molestiae.
        </p>
      </div>
      <div className={styles.cards}>
        {cards.map((card: any) => {
          return (
            <PricingCard
              key={card.name}
              title={card.title}
              services={card.services}
              price={card.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
