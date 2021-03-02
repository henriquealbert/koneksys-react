import { useUploadData } from 'contexts/UploadDataContext';
import { FaUpload, FaFootballBall, FaStar, FaCheck } from 'react-icons/fa';

import styles from 'styles/components/StepToolbar.module.css';

export function StepToolbar({ activeSteps }) {
  const { error } = useUploadData();

  return (
    <nav>
      <ul className={`${styles.stepToolbar}`}>
        <li
          className={`${styles.step} ${activeSteps[0] && styles.current} ${
            error && styles.currentError
          }
          `}
        >
          <FaUpload className={styles.icon} /> Upload Data
        </li>
        <li className={`${styles.step} ${activeSteps[1] && styles.current}`}>
          <FaFootballBall className={styles.icon} /> Player Status
        </li>
        <li className={`${styles.step} ${activeSteps[2] && styles.current}`}>
          <FaStar className={styles.icon} /> Favorite
        </li>
        <li className={`${styles.step} ${activeSteps[3] && styles.current}`}>
          <FaCheck className={styles.icon} /> Complete
        </li>
      </ul>
    </nav>
  );
}
