import React from "react";

const PhotoList = (props) => (
  <div>
  {props.photoThumbnails.map(thumbnail => (
    <div>
      <img src={thumbnail} />
    </div>
  ))}
  </div>
);

export default PhotoList;
