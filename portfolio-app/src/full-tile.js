import React from 'react';

function FullTile ({ data }) {
  return (
    <div className="full-tile">
    {data.elements.map((item, index) => (
      <div key={index}>
        <h1>{item.name}</h1>
        <h2>{item.title}</h2>
        <h3>{item.skill}</h3>
        <p>{item.desc}</p>
        {item.img && <img src={item.img}/>}
      </div>
    ))}
    </div>
  );
}

export default FullTile;
