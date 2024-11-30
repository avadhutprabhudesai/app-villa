import { faApple, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WidthLimiter from "../width-limiter/WidthLimiter";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>A powerful app for your business.</h1>
            <p>
              From open source to pro services, Piqes helps you to build,
              deploy, test, and monitor apps.
            </p>

            <div className={styles.buttons}>
              <button className={styles.btnAppStore}>
                <FontAwesomeIcon icon={faApple} className="fa-fw" />
                App store
              </button>
              <button className={styles.btnGooglePlay}>
                <FontAwesomeIcon icon={faGooglePlay} className="fa-fw" />
                Google play
              </button>
            </div>
          </div>
          <div className={styles.image}>
            <img src="/assets/images/bg-banner.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
