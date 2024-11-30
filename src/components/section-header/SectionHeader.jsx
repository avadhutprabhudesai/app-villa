import React from "react";
import styles from "./SectionHeader.module.scss";

export default function SectionHeader({ title, heading, text }) {
  return (
    <>
      <p className={styles.title}>{title}</p>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.text}>{text}</p>
    </>
  );
}
