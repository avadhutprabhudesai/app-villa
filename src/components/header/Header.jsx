import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import WidthLimiter from "../width-limiter/WidthLimiter";
import classNames from "classnames";

export default function Header() {
  const [menus, setMenus] = useState([
    "Home",
    "Features",
    "Overview",
    "Pricing",
    "Team",
    "Blog",
    "Contact",
  ]);

  const [atBase, setAtBase] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const id = window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        setAtBase(true);
      } else {
        setAtBase(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", id);
    };
  }, []);

  const classes = {
    [styles.headerBase]: atBase,
    [styles.headerScroll]: !atBase,
  };

  const logo = atBase ? "./white-logo.svg" : "./logo.svg";
  return (
    <div className={classNames(styles.header, classes)}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.wideMenu}>
            <ul>
              {menus.map((menu) => (
                <li key={menu}>
                  <a className={styles.menu} href="#">
                    {menu}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.mobileMenu}>
            <div
              className={classNames(styles.hamburger, {
                [styles.hamburgerActive]: showMobileMenu,
              })}
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
            {showMobileMenu && (
              <div className={styles.mobileMenuContent}>
                <ul>
                  {menus.map((menu) => (
                    <li key={menu}>
                      <a className={styles.mobileMenu} href="#">
                        {menu}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className={styles.cta}>
            <button>Get it now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
