import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import mockProducts from "../../components/Mocks/MockProducts.jsx";

const SectionProduct = () => {
  return (
    <>
      <Row>
        {mockProducts.map((product) => (
          <Col
            key={mockProducts.id}
            lg={3}
            md={4}
            xs={6}
            sm={6}
            className="p-0"
          >
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SectionProduct;
