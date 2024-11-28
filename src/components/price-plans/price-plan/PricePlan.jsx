import React from "react";
import styles from "./PricePlan.module.scss";

export default function PricePlan({
  name,
  description,
  pricePerMonth,
  featuresIncluded,
}) {
  return (
    <div className={styles.plan}>
      <div className={styles.details}>
        <h4 className={styles.name}>{name}</h4>
        <p className={styles.description}>{description}</p>
        <div className={styles.price}>
          <span className={styles.priceBold}>${pricePerMonth}</span>/mo
        </div>
        <button className={styles.button}>Buy {name}</button>
      </div>
      <div className={styles.features}>
        <p>What's included</p>
        <ul>
          {featuresIncluded.map((feature) => {
            return <li className={styles.feature}>{feature}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
