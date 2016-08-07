import React from "react";

const PhotoList = (props) => (
  <div>
  {props.photos.map(photo => (
    <div>
      {photo}
    </div>
  ))}
  </div>
);

export default PhotoList;
