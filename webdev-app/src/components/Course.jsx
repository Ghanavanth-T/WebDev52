import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseButton = ({ label, imageSrc, to, onClick, isZoomed }) => (
  <Link to={to}>
    <button
      className={`text-white ${isZoomed ? 'transform scale-110 transition-transform duration-300' : ''} bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2`}
      onClick={onClick}
    >
      <img
        className={`h-20 ${isZoomed ? 'scale-110 transition-transform duration-300' : ''}`}
        src={imageSrc}
        alt=""
      />
      <hr />
      <strong>{label}</strong>
    </button>
  </Link>
);

const Course = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomToggle = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div className="pt-12">
        <div className="pl-16 font-bold font-serif">
          <h1 className="text-5xl">Choose Your Course</h1>
        </div>
      </div>

      <div className="flex justify-between pl-20 pr-20 pt-16">
        <CourseButton
          label="ELECTRICAL"
          imageSrc="/src/assets/books.png"
          to="/electrical"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="CSE"
          imageSrc="/src/assets/books.png"
          to="/CSE"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="MECHANICAL"
          imageSrc="/src/assets/books.png"
          to="/mechanical"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
      </div>

      <div className="flex justify-between pl-48 pr-52 pt-16">
        <CourseButton
          label="CIVIL"
          imageSrc="/src/assets/books.png"
          to="/civil"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="CHEMICAL"
          imageSrc="/src/assets/books.png"
          to="/chemical"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="AEROSPACE"
          imageSrc="/src/assets/books.png"
          to="/aerospace"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
      </div>

      <div className="flex justify-between pl-20 pr-20 pt-16">
        <CourseButton
          label="COMPUTER NETWORKS"
          imageSrc="/src/assets/books.png"
          to="/computer-networks"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="SOFTWARE ENGINEERING"
          imageSrc="/src/assets/books.png"
          to="/software-engineering"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
        <CourseButton
          label="DATA STRUCTURES"
          imageSrc="/src/assets/books.png"
          to="/data-structures"
          onClick={handleZoomToggle}
          isZoomed={isZoomed}
        />
      </div>
    </>
  );
};

export default Course;
