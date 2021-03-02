import { Button } from 'components/Button';
import { CustomSelect } from 'components/CustomSelect';
import { ModalTable } from 'components/ModalTable';
import { useUploadData } from 'contexts/UploadDataContext';

import styles from 'styles/components/PlayerStatus.module.css';

export const PlayerStatus = ({ handleNextStep, handlePreviousStep }) => {
  const { data, setData } = useUploadData();

  const newData = [...data];

  const handleChange = (value, item) => {
    item.Status = value;
    setData(newData);
  };

  return (
    <div className={styles.playerStatus}>
      <h3>Player Status</h3>
      <ModalTable>
        <thead>
          <tr>
            <th>Player</th>
            <th>#</th>
            <th>Pos</th>
            <th>College</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {newData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item['Player Name']}</td>
                <td>{item['#']}</td>
                <td>{item['Pos']}</td>
                <td>{item['College']}</td>
                <td>
                  <CustomSelect
                    name="status"
                    id="status"
                    defaultValue={item['Status']}
                    onChange={(e) => handleChange(e.target.value, item)}
                  >
                    <option value="Active">Active</option>
                    <option value="Injuried">Injuried</option>
                    <option value="Practice">Practice</option>
                    <option value="Suspended">Suspended</option>
                  </CustomSelect>
                </td>
              </tr>
            );
          })}
        </tbody>
      </ModalTable>
      <div className={styles.playerStatusFooter}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => handlePreviousStep('Upload Data', 'Player Status')}
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => handleNextStep('Favorite')}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
