import styles from 'styles/components/Button.module.css';

export function Button({ children, variant, type, onClick, ...props }) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]}`}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
