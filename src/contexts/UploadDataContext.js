import { createContext, useContext, useState } from 'react';
import { parseCsv } from 'utils/parseCsv';

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

  console.log(data);

  const [teamName, setTeamName] = useState('');

  const onChangeTeamName = (e) => {
    setTeamName(e.target.value);
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
        teamName
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
