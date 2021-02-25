import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

import { Button } from 'components/Button';
import { CustomFileInput } from 'components/CustomFileInput';

import styles from 'styles/components/UploadData.module.css';

export function UploadData() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
    console.log(e.target.files[0]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3>Upload Data</h3>

        {file ? (
          <>
            <div className={styles.textInput}>
              {fileName} <FaCheck color="var(--accent)" />
            </div>

            <div className={styles.teamName}>
              <h3>Team Name</h3>
              <input type="text" name="teamName" placeholder="Name" required />
            </div>
          </>
        ) : (
          <>
            <CustomFileInput onChange={onChange} />
            <p>File must be in .csv format</p>
          </>
        )}
      </div>
      <div className={styles.footer}>
        <Button variant="primary" type="button" disabled>
          Continue
        </Button>
      </div>
    </div>
  );
}
