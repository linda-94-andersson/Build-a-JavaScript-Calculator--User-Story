import react from "react";
import { Button, Col } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { displayState } from "../../atoms/atom";

const Eight = () => {
  const [display, setDisplay] = useRecoilState(displayState);

  const handleClick = () => {
    if (display === "0") {
      setDisplay("8");
    } else {
      setDisplay(display + "8");
    }
  };

  return (
    <Col style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Button
        id="eight"
        style={{ borderRadius: 0, width: "100%" }}
        variant="dark"
        onClick={handleClick}
      >
        8
      </Button>
    </Col>
  );
};

export default Eight;
