import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './projects.css';
import ProjectModal from './projectmodal';
import scree1 from '../../images/Screenshot (2).png';
import scree2 from '../../images/Screenshot (3).png';
import scree3 from '../../images/Screenshot (4).png';
import scree4 from '../../images/Screenshot (34).png';
import scree5 from '../../images/Screenshot (35).png';
import scree6 from '../../images/Screenshot (36).png';

const Projects = () => {
  const projectImages = [
    scree1,
    scree2,
    scree3,
    scree4,
    scree5,
    scree6,
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navbar />
      <div className="projects-header">
        <h2>These are but a few of the projects I've worked on:</h2>
      </div>
      <div className="projects-grid">
        {projectImages.map((image, index) => (
          <div
            key={index}
            className="project-item"
            onClick={() => openModal(image)}
          >
            <img src={image} alt={`Project ${index + 1}`} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <ProjectModal
          image={selectedImage}
          closeModal={closeModal}
        /> 
      )}
    </div>
  );
};

export default Projects;
