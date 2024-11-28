import React from "react";
import styles from "./Overview.module.scss";
import classNames from "classnames";
import IconBox from "../icon-box/IconBox";
import { faDownload, faTable } from "@fortawesome/free-solid-svg-icons";

export default function Overview() {
  return (
    <>
      <div className={styles.overview}>
        <div className="container">
          <div className={styles.content}>
            <div className={classNames(styles.text, styles.lText)}>
              <IconBox icon={faDownload} />
              <h2>1,25,000 Customers Using The Application!</h2>
              <p>
                Collaborate over projects with your team and clients optimised
                for mobile and tablet don't let slow page speeds drive our
                innovative platform empowers anyone to convert clicks ou'll
                publish your first landing page in minutes.
              </p>
              <button className={styles.button}>Get Started</button>
            </div>
            <div className={classNames(styles.image, styles.rImage)}>
              <img src="/app-ss1.png" />
            </div>
            <div className={classNames(styles.image, styles.lImage)}>
              <img src="/app-ss2.png" />
            </div>
            <div className={classNames(styles.text, styles.rText)}>
              <IconBox icon={faTable} />
              <h2>Seamless Loyalty</h2>
              <p>
                Collaborate over projects with your team and clients optimised
                for mobile and tablet don't let slow page speeds drive our
                innovative platform empowers anyone to convert clicks ou'll
                publish your first landing page in minutes.
              </p>
              <button className={styles.button}>Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.strip}>
        <div className="container">
          <h2 className={styles.header}>
            Trusted by developers from over 80 planets
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h2>100%</h2>
              <p>Satisfaction</p>
            </div>
            <div className={styles.stat}>
              <h2>120K</h2>
              <p>Happy Users</p>
            </div>
            <div className={styles.stat}>
              <h2>125K+</h2>
              <p>Downloads</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
