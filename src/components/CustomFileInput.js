import styles from 'styles/components/CustomFileInput.module.css';

export function CustomFileInput({ onChange }) {
  return (
    <label htmlFor="upload" role="button" className={styles.customFileInput}>
      <input
        type="file"
        accept={'true'}
        id="upload"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      Select File
    </label>
  );
}
