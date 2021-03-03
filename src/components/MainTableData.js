import { CustomTable } from './CustomTable';
import { useUploadData } from 'contexts/UploadDataContext';

import styles from 'styles/components/MainTableData.module.css';

export function MainTableData() {
  const { mainTableData, favorite } = useUploadData();

  return (
    <>
      {mainTableData.length > 0 && (
        <div className={styles.mainTableData}>
          <CustomTable noContainer>
            <thead>
              <tr>
                <th>Player</th>
                <th>#</th>
                <th>Pos</th>
                <th>Height</th>
                <th>Weight</th>
                <th>Experience</th>
                <th>Age</th>
                <th>Salary</th>
                <th>College</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {mainTableData.map((item, index) => {
                return (
                  <tr
                    key={index}
                    className={
                      favorite === item['Player Name']
                        ? styles.currentFavorite
                        : ''
                    }
                  >
                    <td>{item['Player Name']}</td>
                    <td>{item['#']}</td>
                    <td>{item['Pos']}</td>
                    <td>{item['Height']}</td>
                    <td>{item['Weight']}</td>
                    <td>{item['Experience']}</td>
                    <td>{item['Age']}</td>
                    <td>{item['Base Salary']}</td>
                    <td>{item['College']}</td>
                    <td>{item['Status']}</td>
                  </tr>
                );
              })}
            </tbody>
          </CustomTable>
        </div>
      )}
    </>
  );
}
