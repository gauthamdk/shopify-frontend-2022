import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

const getImages = async () => {
  const res = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API}`
  );

  return res.data;
};

function App() {
  const [photos, setPhotos] = useState<any[]>([]);

  return (
    <>
      {console.log(photos)}
      <div className="App">Nasa images page</div>
      {photos.length > 0 ? (
        photos.map((photo) => {
          return <img src={photo.img_src} />;
        })
      ) : (
        <></>
      )}
      <button
        onClick={async () => {
          const images = await getImages();
          setPhotos(images.photos);
        }}
      >
        Submit
      </button>
    </>
  );
}

export default App;
