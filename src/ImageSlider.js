import React, { useState } from "react";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  right: "32px",
  fontSize: "45px",
  color: "#00802b",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -50%)",
  left: "32px",
  fontSize: "45px",
  color: "#00802b",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  overflow: 'hidden',
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
  color: "#00802b",
};

const zoomInStyles = {
  padding: "2px",
  border: "1px solid",
  borderRadius: "5px",
  position: "absolute",
  top: "16px",
  right: "16px",
  fontSize: "20px",
  color: "#00802b",
  cursor: "pointer",
};

const zoomOutStyles = {
  padding: "2px",
  border: "1px solid",
  borderRadius: "5px",
  position: "absolute",
  top: "16px",
  right: "122px",
  fontSize: "20px",
  color: "#00802b",
  cursor: "pointer",
};

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100); // Başlangıçta normal büyüklük (100%)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${slides[currentIndex].url})`,
    transform: `scale(${zoomLevel / 100})`, // Yakınlaştırma veya uzaklaştırma işlemi burada uygulanır
  };

  const zoomIn = () => {
    if (zoomLevel < 200) {
      setZoomLevel(zoomLevel + 10); // 10 birim yakınlaştır
    }
  };

  const zoomOut = () => {
    if (zoomLevel > 50) {
      setZoomLevel(zoomLevel - 10); // 10 birim uzaklaştır
    }
  };

  return (

    <div style={sliderStyles}>
      <div>
        <div onClick={goToPrevious} style={leftArrowStyles}>
          ❰
        </div>
        <div onClick={goToNext} style={rightArrowStyles}>
          ❱
        </div>
      </div>

      <h3>{slides[currentIndex].title}</h3> {/* Başlık burada */}
      <div style={slideStylesWidthBackground}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            style={dotStyle}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
      <div onClick={zoomIn} style={zoomInStyles}>
        Zoom In +
      </div>
      <div onClick={zoomOut} style={zoomOutStyles}>
        Zoom Out -
      </div>
    </div>

  );
};

export default ImageSlider;
