import React from "react";
import styles from "./PricePlans.module.scss";
import PricePlan from "./price-plan/PricePlan";
import SectionHeader from "../section-header/SectionHeader";

const plans = [
  {
    name: "Hobby",
    description: "All the basics for starting a new business",
    pricePerMonth: "12",
    featuresIncluded: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    name: "Freelancer",
    description: "All the basics for starting a new business",
    pricePerMonth: "24",
    featuresIncluded: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    name: "Startup",
    description: "All the basics for starting a new business",
    pricePerMonth: "32",
    featuresIncluded: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
  {
    name: "Enterprise",
    description: "All the basics for starting a new business",
    pricePerMonth: "48",
    featuresIncluded: [
      "Cras justo odio.",
      "Dapibus ac facilisis in.",
      "Morbi leo risus.",
      "Potenti felis, in cras ligula.",
    ],
  },
];

export default function PricePlans() {
  return (
    <div className={styles.pricePlans}>
      <div className="container">
        <div className={styles.header}>
          <SectionHeader
            title="Pricing"
            heading="Pricing Plan"
            text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
          />
        </div>

        <div className={styles.list}>
          {plans.map(
            ({ name, description, pricePerMonth, featuresIncluded }) => {
              return (
                <PricePlan
                  key={name}
                  name={name}
                  description={description}
                  pricePerMonth={pricePerMonth}
                  featuresIncluded={featuresIncluded}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
