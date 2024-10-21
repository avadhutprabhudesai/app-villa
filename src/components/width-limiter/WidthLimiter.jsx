import React from "react";
import styles from "./WidthLimiter.module.scss";

export default function WidthLimiter({ children }) {
  return <div className={styles.widthLimit}>{children}</div>;
}
