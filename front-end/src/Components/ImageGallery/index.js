import React, { useState } from "react";

const ImageGallery = () => {
  const [imageNum, setImageNum] = useState(1);
  return (
    <div className="img-gallery-container">
      <img src={`/image-gallery-${imageNum}.jpg`} alt="img-1" height="100%" width={"100%"} />
      <div className="scroller-container">
        <button className="img-gallery-scoller" onClick={() => setImageNum(1)}>
          Prev
        </button>
        <button className="img-gallery-scoller" onClick={() => setImageNum(2)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
