import { features } from "@/data/data";
import classNames from "classnames";
import Feature from "../feature/Feature";
import styles from "./Featureslist.module.scss";

export default function FeaturesList() {
  return (
    <div className={styles.features}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h3>Features</h3>
            <h2>Your Experience Gets Better And Better Over Time.</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
        <div className={styles.list}>
          {features.map(({ id, icon, title, description }) => {
            return (
              <Feature
                key={id}
                title={title}
                description={description}
                icon={icon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
