import styles from 'styles/components/CustomFileInput.module.css';

export function CustomFileInput({ onChange, label }) {
  return (
    <label htmlFor="upload" role="button" className={styles.customFileInput}>
      <input
        type="file"
        accept=".csv"
        id="upload"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      {label}
    </label>
  );
}
