import { FaUpload, FaFootballBall, FaStar, FaCheck } from 'react-icons/fa';

import styles from 'styles/components/StepToolbar.module.css';

export function StepToolbar() {
  return (
    <nav>
      <ul className={`${styles.stepToolbar}`}>
        <li className={`${styles.step} ${styles.current}`}>
          <FaUpload className={styles.icon} /> Upload Data
        </li>
        <li className={styles.step}>
          <FaFootballBall className={styles.icon} /> Player Status
        </li>
        <li className={styles.step}>
          <FaStar className={styles.icon} /> Favorite
        </li>
        <li className={styles.step}>
          <FaCheck className={styles.icon} /> Complete
        </li>
      </ul>
    </nav>
  );
}
