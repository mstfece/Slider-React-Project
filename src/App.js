import ImageSlider from "./ImageSlider";
import './App.css';
import React from 'react';
/*
import { RenderingEngine,cornerstone, Enums } from '@cornerstonejs/core';
import cornerstoneTools from '@cornerstonejs/tools';
import cornerstoneDICOMImageLoader from '@cornerstonejs/dicom-image-loader';
import dicomParser from 'dicom-parser'; 
*/


const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "Miller Rashad"},
    { url: "http://localhost:3000/image-2.jpg", title: "Adams" },
    { url: "http://localhost:3000/image-3.dcm", title: "" },

  ];
  const containerStyles = {
    width: "750px",
    height: "480px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Slider React Project</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
       
      </div>
    </div>
  );
};

export default App;
 