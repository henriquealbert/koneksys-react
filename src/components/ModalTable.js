import styles from 'styles/components/ModalTable.module.css';

export const ModalTable = ({ children }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.tableContent}>{children}</table>
    </div>
  );
};
