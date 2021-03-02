import styles from 'styles/components/CustomSelect.module.css';

export const CustomSelect = ({
  name,
  id,
  defaultValue,
  onChange,
  children,
  ...props
}) => {
  return (
    <div className={styles.select}>
      <select
        name={name}
        id={id}
        defaultValue={defaultValue}
        className={styles.standardSelect}
        onChange={onChange}
        {...props}
      >
        {children}
      </select>
    </div>
  );
};
