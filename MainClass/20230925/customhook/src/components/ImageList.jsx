import React from "react";
import Imageitem from "./Imageitem";

export default function ImageList({ imageList }) {
  return (
    <ul>
      {imageList.map((imgData) => {
        return (
          <li key={imgData.id}>
            <Imageitem imgData={imgData} />
          </li>
        );
      })}
    </ul>
  );
}
