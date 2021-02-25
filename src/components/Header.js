import { Button } from './Button';
import { useModal } from 'contexts/ModalContext';

import styles from 'styles/components/Header.module.css';

export function Header() {
  const { openModal } = useModal();

  return (
    <header className={styles.header}>
      <h1>My Team</h1>
      <Button variant="primary" type="button" onClick={openModal}>
        Import Team
      </Button>
    </header>
  );
}
