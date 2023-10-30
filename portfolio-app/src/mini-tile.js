import React from 'react';

const MiniTile = ({ skill, img }) => {
  return (
    <div className="mini-tile">
      <h1>{skill}</h1>
      {img && <img src={img} onError={handleImgError} />}
    </div>
  );
}

export default MiniTile;
