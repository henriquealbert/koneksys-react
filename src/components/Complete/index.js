import { Button } from 'components/Button';
import { useUploadData } from 'contexts/UploadDataContext';
import styles from 'styles/components/Complete.module.css';

export const Complete = ({ handlePreviousStep }) => {
  const {
    fileName,
    teamName,
    favorite,
    countSummary,
    generateMainTable
  } = useUploadData();

  const summaryTop = [
    { id: 1, label: 'Data', value: fileName },
    { id: 2, label: 'Team', value: teamName },
    { id: 3, label: 'Favorite Player', value: favorite }
  ];
  const summaryBottom = [
    { id: 4, label: 'Active', value: countSummary().Active },
    { id: 5, label: 'Injuried', value: countSummary().Injuried },
    { id: 6, label: 'Practice Squad', value: countSummary().Practice },
    { id: 7, label: 'Suspended', value: countSummary().Suspended }
  ];

  return (
    <div className={styles.complete}>
      <h3>Summary</h3>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryTop}>
          {summaryTop.map((item) => (
            <div key={item.id}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
        <div className={styles.summaryBottom}>
          {summaryBottom.map((item) => (
            <div key={item.id}>
              <span>{item.label}</span>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.completeFooter}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => handlePreviousStep('Favorite', 'Complete')}
        >
          Back
        </Button>
        <Button variant="primary" type="button" onClick={generateMainTable}>
          Confirm
        </Button>
      </div>
    </div>
  );
};
