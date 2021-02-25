import styles from 'styles/components/StepToolbar.module.css';

export function StepToolbar() {
  return (
    <nav>
      <ul className={styles.stepToolbar}>
        <li>Upload Data</li>
        <li>Player Status</li>
        <li>Favorite</li>
        <li>Complete</li>
      </ul>
    </nav>
  );
}
