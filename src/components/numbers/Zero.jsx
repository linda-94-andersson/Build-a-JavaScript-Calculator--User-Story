import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Zero = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("0");
    } else {
      setDisplay(display + "0");
    }
  };

  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="zero"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        0
      </Button>
    </Col>
  );
};

export default Zero;
