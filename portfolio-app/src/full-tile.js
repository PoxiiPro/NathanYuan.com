import React from 'react';

function FullTile ({ data }) {
  data.forEach(item => console.log(item));

  if (!data) {
    return "Error with map";
  }

  return (
    <div className={data.length < 2 ? "full-tile" : "full-tile-container"}>
    {data.map((item, index) => (
      <div key={index}>
        <h1>{item.name}</h1>
        <h2>{item.title}</h2>
        <h3>{item.skills}</h3>
        <p>{item.desc}</p>
        {/* {item.img && <img src={item.img} alt=''/>} */}
        {/* imgSize(item.img[0]) */}
        {item.img[0] && <img src={item.img[0]} alt=''/>}
      </div>
    ))}
    </div>
  );
}

export default FullTile;
