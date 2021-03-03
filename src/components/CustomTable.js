import styles from 'styles/components/CustomTable.module.css';

export const CustomTable = ({ children, noContainer }) => {
  return (
    <div className={noContainer ? '' : styles.tableWrapper}>
      <table className={styles.tableContent}>{children}</table>
    </div>
  );
};
