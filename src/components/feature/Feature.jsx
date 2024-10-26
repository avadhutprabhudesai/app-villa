import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Feature.module.scss";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const Feature = ({ title, description, icon }) => {
  const featureRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  };

  const callback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      console.log("Visible now");
      setAnimate(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [featureRef, options]);

  return (
    <div
      className={classNames(styles.feature, { [styles.animate]: animate })}
      ref={featureRef}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Feature;
