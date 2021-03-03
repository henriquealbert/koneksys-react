import { Header } from 'components/Header';
import { MainTableData } from 'components/MainTableData';
import { Modal } from 'components/Modal';
import { useModal } from 'contexts/ModalContext';

export function Home() {
  const { showModal } = useModal();

  return (
    <div className="container">
      <Header />
      {showModal && <Modal />}
      <main>
        <MainTableData />
      </main>
    </div>
  );
}
