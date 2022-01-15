import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ImageCard from "./components/ImageCard";
import Loading from "./components/Loading";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

const getImages = async () => {
  const res = await axios.get(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_NASA_API}`
  );

  return res.data;
};

function App() {
  useEffect(() => {
    let mounted = true;
    getImages().then((images) => {
      setLoading(false);
      setPhotos(images.photos);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  return (
    <Container className="App">
      <h1 className="title">Spacestagram</h1>
      <h2 className="subtitle">Images from Curiosity rover</h2>
      <div style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        {console.log(photos)}
        <Row className="imageRow">
          {loading ? (
            <Loading></Loading>
          ) : (
            photos.map((photo) => {
              return (
                <Col key={photo.id} className="cardCol">
                  <ImageCard
                    title={photo.camera.full_name}
                    date={photo.earth_date}
                    image={photo.img_src}
                    alt={`${photo.rover.name} with ${photo.camera.full_name} taken on ${photo.earth_date}`}
                  ></ImageCard>
                </Col>
              );
            })
          )}
        </Row>
      </div>
    </Container>
  );
}

export default App;
