import React from "react";
import styles from "./IconBox.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
export default function IconBox({ icon, iconClass }) {
  return (
    <div className={classNames(styles.icon, iconClass)}>
      <FontAwesomeIcon icon={icon} />
    </div>
  );
}
