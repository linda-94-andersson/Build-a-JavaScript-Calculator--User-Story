import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Two = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("2");
    } else {
      setDisplay(display + "2");
    }
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="two"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        2
      </Button>
    </Col>
  );
};

export default Two;
