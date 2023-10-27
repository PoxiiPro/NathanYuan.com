import React from 'react';

const Tile = ({ name, skills, desc }) => {
  return (
    <div className="tile">
      <h1>{name}</h1>
      <h2>{skills}</h2>
      <p>{desc}</p>
    </div>
  );
}

export default Tile;
