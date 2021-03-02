import { CgClose } from 'react-icons/cg';
import { useState } from 'react';

import { Button } from 'components/Button';
import { useModal } from 'contexts/ModalContext';
import { StepToolbar } from 'components/StepToolbar';
import { UploadData } from 'components/UploadData';
import { PlayerStatus } from './PlayerStatus';
import { Favorite } from './Favorite';

import styles from 'styles/components/Modal.module.css';

export function Modal() {
  const { closeModalOverlay, modalRef, closeModal } = useModal();

  const [activeSteps, setActiveSteps] = useState(['Upload Data']);
  const [currentStep, setCurrentStep] = useState('Upload Data');

  const handleNextStep = (label) => {
    setCurrentStep(label);
    setActiveSteps((prev) => [...prev, label]);
  };

  const handlePreviousStep = (label) => {
    setCurrentStep(label);
    setActiveSteps((prev) => prev.filter((item) => item === label));
  };

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

        <StepToolbar activeSteps={activeSteps} />

        {currentStep === 'Upload Data' ? (
          <UploadData handleNextStep={handleNextStep} />
        ) : currentStep === 'Player Status' ? (
          <PlayerStatus
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : currentStep === 'Favorite' ? (
          <Favorite
            handleNextStep={handleNextStep}
            handlePreviousStep={handlePreviousStep}
          />
        ) : (
          'cpmplete'
        )}
      </section>
    </div>
  );
}
