import { useUploadData } from 'contexts/UploadDataContext';
import { FaCheck, FaTimesCircle } from 'react-icons/fa';
import { CgClose } from 'react-icons/cg';

import styles from 'styles/components/FileWrapper.module.css';

export const FileWrapper = () => {
  const { error, fileName, teamName, onChangeTeamName } = useUploadData();

  if (error) {
    return (
      <div>
        <div className={styles.textInput}>
          {fileName}
          <CgClose color="var(--error)" />
        </div>
        <div className={styles.missingValue}>
          <h3>
            <FaTimesCircle color="var(--error)" />
            Missing Value
          </h3>
          <p>
            One of records has a missing value for one of the columns. Please
            ensure your .csv has complete information.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.textInput}>
        {fileName}
        <FaCheck color="var(--accent)" />
      </div>

      <div className={styles.teamName}>
        <h3>Team Name</h3>
        <input
          type="text"
          name="teamName"
          placeholder="Name"
          value={teamName}
          onChange={onChangeTeamName}
        />
      </div>
    </div>
  );
};
