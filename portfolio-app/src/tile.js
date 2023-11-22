// import React from 'react';
import React, { useState } from 'react';

const Tile = ({ name, title, skills, desc, img }) => {
  const [imgLoaded, setImgLoaded] = useState(true);
  const handleImgError = () => {
    setImgLoaded(false);
  
  };
  return (
    <div className="tile">
      <h1>{name}</h1>
      <h2>{title}</h2>
      <h3>{skills}</h3>
      <p>{desc}</p>
      {img && <img src={img} alt='' onError={handleImgError} />}
    </div>
  );
}

export default Tile;
