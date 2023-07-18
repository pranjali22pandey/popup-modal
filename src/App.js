import React, { useState } from "react";
import "./styles.css";

const Modal = ({ isOpen, onClose, onSave, title, body }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">
          <button className="modal-button" onClick={onClose}>
            Close
          </button>
          <button className="modal-button primary" onClick={onSave}>
            Save changes
          </button>
        </div>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </div>
  );
};

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSaveChanges = () => {
    // Perform save changes action here
    closeModal();
  };

  return (
    <div className="app-container">
      
      <div className="button-container">
        <button className="open-modal-button" onClick={openModal}>
          Open Modal
        </button>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        onSave={handleSaveChanges}
        title="My Modal"
        body="This is the content of the modal."
      />
    </div>
  );
}

