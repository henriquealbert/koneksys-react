import { Button } from 'components/Button';
import { CustomFileInput } from 'components/CustomFileInput';
import { useUploadData } from 'contexts/UploadDataContext';
import { FileWrapper } from './FileWrapper';

import styles from 'styles/components/UploadData.module.css';

export function UploadData({ handleNextStep }) {
  const { onChangeFile, fileName, error, teamName } = useUploadData();

  const onChange = (e) => {
    onChangeFile(e.target.files[0]);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <h3>Upload Data</h3>

        {fileName ? (
          <FileWrapper />
        ) : (
          <div className={styles.inputWrapper}>
            <CustomFileInput label="Select File" onChange={onChange} />
            <p>File must be in .csv format</p>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        {error ? (
          <CustomFileInput label="Re-Upload File" onChange={onChange} />
        ) : (
          <Button
            variant="primary"
            type="button"
            disabled={!teamName}
            onClick={() => handleNextStep('Player Status')}
          >
            Continue
          </Button>
        )}
      </div>
    </div>
  );
}
