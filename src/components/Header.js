import { Button } from './Button';
import { useModal } from 'contexts/ModalContext';
import { useUploadData } from 'contexts/UploadDataContext';

import styles from 'styles/components/Header.module.css';

export function Header() {
  const { openModal } = useModal();
  const { teamName } = useUploadData();

  return (
    <header className={styles.header}>
      <h1>{teamName ? teamName : 'My Team'}</h1>
      <Button variant="primary" type="button" onClick={openModal}>
        Import Team
      </Button>
    </header>
  );
}
