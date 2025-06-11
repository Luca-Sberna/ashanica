import React from "react";
import { Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Assistance = () => {
  return (
    <Container>
      <Link
        to={"/"}
        className="menu-icon-link text-dark text-decoration-none align-items-center justify-content-end d-none d-md-flex pt-4"
      >
        <p className="m-0 pe-2">torna al menù</p>
        <FaHome className="fs-5 menu-icon" />
      </Link>
    </Container>
  );
};

export default Assistance;
