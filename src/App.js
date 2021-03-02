import { UploadDataProvider } from 'contexts/UploadDataContext';
import { ModalProvider } from 'contexts/ModalContext';
import { Home } from 'pages/Home';

import 'styles/global.css';

export function App() {
  return (
    <ModalProvider>
      <UploadDataProvider>
        <Home />
      </UploadDataProvider>
    </ModalProvider>
  );
}
