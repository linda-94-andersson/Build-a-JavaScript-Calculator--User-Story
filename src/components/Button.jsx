import React from "react";
import { Button as BootstrapButton, Col } from "react-bootstrap";

const Button = ({ onClick, children, variant }) => {
  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
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
