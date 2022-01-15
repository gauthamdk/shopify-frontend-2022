import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";

interface CardProps {
  title: string;
  date: string;
  image: string;
  alt: string;
}

export default function ImageCard({ title, date, image, alt }: CardProps) {
  const toggleLike = () => {
    setLike(!like);
  };

  const [like, setLike] = useState(false);

  return (
    <Card
      style={{
        width: "20rem",
        backgroundColor: "#dadce0",
      }}
      className="my-3"
    >
      <Card.Img
        variant="top"
        src={image}
        alt={alt}
        style={{ height: "15rem" }}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Button variant="danger" onClick={toggleLike}>
          {like ? (
            <FontAwesomeIcon icon={faHeart} />
          ) : (
            <FontAwesomeIcon icon={farHeart} />
          )}
        </Button>
      </Card.Body>
    </Card>
  );
}
