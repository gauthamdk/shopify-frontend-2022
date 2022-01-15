import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading() {
  return (
    <>
      <FontAwesomeIcon
        icon={faSpinner}
        size="6x"
        style={{ color: "white" }}
        className="fa-spin"
      />
      <h3 style={{ marginTop: "10px", color: "white", textAlign: "center" }}>
        Loading...
      </h3>
    </>
  );
}
