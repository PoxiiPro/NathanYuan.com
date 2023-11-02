import React from 'react';

function FullTile ({ data }) {
  data.forEach(item => console.log(item));

  if (!data) {
    return "Error with map";
  }

  return (
    <div className="full-tile">
    {data.map((item, index) => (
      <div key={index}>
        <h1>{item.name}</h1>
        <h2>{item.title}</h2>
        <h3>{item.skill}</h3>
        <p>{item.desc}</p>
        {item.img && <img src={item.img} alt=''/>}
      </div>
    ))}
    </div>
  );
}

export default FullTile;
