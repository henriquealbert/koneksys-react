import { Button } from 'components/Button';
import { ModalTable } from 'components/ModalTable';
import { useUploadData } from 'contexts/UploadDataContext';
import { CustomRadioInput } from 'components/CustomRadioInput';

import styles from 'styles/components/Favorite.module.css';

export const Favorite = ({ handlePreviousStep, handleNextStep }) => {
  const { data, favorite, handleFavoriteChange } = useUploadData();

  return (
    <div className={styles.favorite}>
      <h3>Favorite</h3>
      <ModalTable>
        <thead>
          <tr>
            <th></th>
            <th>Player</th>
            <th>#</th>
            <th>Pos</th>
            <th>College</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr
                key={index}
                className={
                  favorite === item['Player Name'] ? styles.currentFavorite : ''
                }
              >
                <td>
                  <CustomRadioInput
                    name="favorite"
                    id={index}
                    value={favorite === item['Player Name']}
                    onChange={() => handleFavoriteChange(item)}
                  />
                </td>
                <td>{item['Player Name']}</td>
                <td>{item['#']}</td>
                <td>{item['Pos']}</td>
                <td>{item['College']}</td>
              </tr>
            );
          })}
        </tbody>
      </ModalTable>
      <div className={styles.favoriteFooter}>
        <Button
          variant="secondary"
          type="button"
          onClick={() => handlePreviousStep('Player Status', 'Favorite')}
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="button"
          onClick={() => handleNextStep('Complete')}
          disabled={!favorite}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};
