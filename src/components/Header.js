import styles from 'styles/components/Header.module.css';
import { Button } from './Button';

export function Header() {
  return (
    <header className={styles.header}>
      <h1>My Team</h1>
      <Button variant="primary">Import Team</Button>
      <Button variant="primary" disabled>
        Continue
      </Button>
      <Button variant="secondary">Back</Button>
      <Button variant="outline">Re-Upload File</Button>
    </header>
  );
}
