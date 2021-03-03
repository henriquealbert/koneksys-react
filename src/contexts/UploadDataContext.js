import { createContext, useContext, useState } from 'react';
import { parseCsv } from 'utils/parseCsv';
import { useModal } from './ModalContext';

const UploadDataContext = createContext();

const UploadDataProvider = ({ children }) => {
  const [fileName, setFileName] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const onChangeFile = async (rawFile) => {
    const result = await parseCsv(rawFile);

    if (result.errors.length === 0) {
      setFileName(rawFile.name);
      setData(result.data);
      setError(false);
    } else {
      setFileName(rawFile.name);
      setError(true);
    }
  };

  // Team name
  const [teamName, setTeamName] = useState('');

  const onChangeTeamName = (e) => {
    setTeamName(e.target.value);
  };

  // Favorite Player
  const [favorite, setFavorite] = useState('');

  const handleFavoriteChange = (item) => {
    setFavorite(item['Player Name']);
  };

  // Count
  const countSummary = () => {
    let activeArray = [];

    data.map((item) => {
      activeArray.push(item.Status);
    });

    const countObj = activeArray.reduce((previous, current) => {
      previous[current] = (previous[current] || 0) + 1;
      return previous;
    }, {});

    return countObj;
  };

  // Main Table
  const { closeModal } = useModal();
  const [mainTableData, setMainTableData] = useState([]);

  console.log(mainTableData);

  const generateMainTable = () => {
    setMainTableData(data);
    closeModal();
  };

  return (
    <UploadDataContext.Provider
      value={{
        onChangeFile,
        error,
        fileName,
        data,
        setData,
        onChangeTeamName,
        teamName,
        favorite,
        handleFavoriteChange,
        countSummary,
        generateMainTable,
        mainTableData
      }}
    >
      {children}
    </UploadDataContext.Provider>
  );
};

function useUploadData() {
  const context = useContext(UploadDataContext);

  if (!context) {
    throw new Error('useUploadData must be used within an UploadDataProvider');
  }

  return context;
}

export { useUploadData, UploadDataProvider };
