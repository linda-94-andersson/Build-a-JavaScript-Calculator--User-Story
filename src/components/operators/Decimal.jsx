import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Decimal = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display.match(/[\.]/gm)) {
      return;
    } else {
      setDisplay(display + ".");
    }
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="decimal"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        .
      </Button>
    </Col>
  );
};

export default Decimal;
