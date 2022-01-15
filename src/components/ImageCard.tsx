import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

interface CardProps {
  title: string;
  date: string;
  image: string;
}
export default function ImageCard({ title, date, image }: CardProps) {
  return (
    <Card
      style={{ width: "18rem", backgroundColor: "#dadce0" }}
      className="my-2"
    >
      <Card.Img variant="top" src={image} style={{ height: "15rem" }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Button variant="danger">Like</Button>
      </Card.Body>
    </Card>
  );
}
