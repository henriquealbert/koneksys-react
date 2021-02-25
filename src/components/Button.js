import styles from 'styles/components/Button.module.css';

export function Button({ children, variant, ...props }) {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}
