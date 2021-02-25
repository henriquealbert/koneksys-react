import { CgClose } from 'react-icons/cg';

import { Button } from 'components/Button';
import { useModal } from 'contexts/ModalContext';
import { StepToolbar } from './Steps/StepToolbar';

import styles from 'styles/components/Modal.module.css';
import { UploadData } from './Steps/UploadData';

export function Modal() {
  const { closeModalOverlay, modalRef, closeModal } = useModal();

  return (
    <div className={styles.overlay} onClick={closeModalOverlay} ref={modalRef}>
      <section className={styles.modalWrapper}>
        <header className={styles.modalHeader}>
          <h2>My Team Importer</h2>
          <Button
            type="button"
            variant="icon"
            aria-label="Close modal"
            onClick={closeModal}
          >
            <CgClose className={styles.closeModal} />
          </Button>
        </header>

        <StepToolbar />

        <UploadData />
      </section>
    </div>
  );
}
