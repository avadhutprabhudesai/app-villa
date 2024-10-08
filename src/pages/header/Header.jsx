import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="width-limiter">
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="logo" />
          </div>
          <div className={styles.menu}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className={styles.cta}>
            <button>Get it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
