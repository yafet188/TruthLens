import React from 'react';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => {

  return (
    <div className="tech-stack-container">
    </div>
  );
};

export default TechStack;