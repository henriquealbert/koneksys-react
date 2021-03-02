import styles from 'styles/components/CustomRadioInput.module.css';

export const CustomRadioInput = ({ value, id, onChange, name }) => {
  return (
    <div className={styles.radioInput}>
      <input
        type="radio"
        name={name}
        id={id}
        required
        defaultChecked={value}
        value={value}
        onChange={onChange}
        className={styles.radioCustom}
      />
      <label htmlFor={id} className={styles.radioCustomLabel} />
    </div>
  );
};
