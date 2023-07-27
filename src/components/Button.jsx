import React from "react";
import { Button as BootstrapButton, Col } from "react-bootstrap";

const Button = ({ onClick, children, variant, id }) => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }} id={id}>
      <BootstrapButton
        style={{ borderRadius: 0, width: "100%" }}
        variant={variant ? variant : "secondary"}
        onClick={onClick}
      >
        {children}
      </BootstrapButton>
    </Col>
  );
};

export default Button;
