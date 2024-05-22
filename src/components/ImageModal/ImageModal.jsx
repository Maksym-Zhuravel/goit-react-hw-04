import Modal from "react-modal";

export default function ImageModal({
  modalValues: { urls, description, likes },
  closeModal,
  modalValues,
}) {
  return (
    <Modal
      isOpen={modalValues !== null}
      onRequestClose={closeModal}
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
    >
      <img src={urls} alt={description} />
      <span>Likes: {likes}</span>
    </Modal>
  );
}
