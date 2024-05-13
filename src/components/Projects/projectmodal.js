import React from 'react';
import './projectmodal.css';

const ProjectModal = ({ image, closeModal }) => {
  return (
    <div className="modal-backdrop" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={image} alt="Project" /> {/* Use the direct reference */}
        <button className="close-modal" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ProjectModal;
