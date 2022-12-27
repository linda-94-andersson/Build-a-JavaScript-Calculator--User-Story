import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Four = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("4");
    } else {
      setDisplay(display + "4");
    }
  };

  return (
    <Col style={{ paddingRight: 0 }}>
      <Button
        id="four"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        4
      </Button>
    </Col>
  );
};

export default Four;
