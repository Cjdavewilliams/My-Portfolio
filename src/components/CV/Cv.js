import React from 'react';

const CV = () => {
  // Define the path to your local CV file
  const cvFilePath = './cv.pdf';

  return (
    <div>
      <h1>My CV</h1>
      {/* Display the CV */}
      <embed src={cvFilePath} type="application/pdf" width="100%" height="600px" />
      {/* Provide a download link */}
      <a href={cvFilePath} download>
        Download CV
      </a>
    </div>
  );
};

export default CV;
