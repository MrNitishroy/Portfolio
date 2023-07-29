import { Col, Row ,Progress} from "antd";
import bag from "../../Assets/Icons/bag4.svg";
import paytm from "../../Assets/Icons/paytm.png";
import gpay from "../../Assets/Icons/gpay.png";
export function SoftwareAndSkill()
{
 return(
    <>
    
    <br />
      <h2>Skills</h2>
      <div className="divider"></div>
      <Row>
        <Col className="left">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>CODING</h2>
          </Row>
          <br />
          <div className="divider"></div>
          <br />

          <Row justify={"space-around"}>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={90}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>HTML / CSS</h3>
            </Col>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={75}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>React JS</h3>
            </Col>
          </Row>
          <br />
          <Row justify={"space-around"}>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={80}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>Flutter / Dart</h3>
            </Col>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={50}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>C# / .Net</h3>
            </Col>
          </Row>
          <br />
          <Row justify={"space-around"}>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={80}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>JavaScript</h3>
            </Col>
            <Col className="pro">
              <Progress
                trailColor={"#454545"}
                strokeWidth={13}
                size={90}
                strokeColor={"var(--greenColor)"}
                type="circle"
                percent={60}
                style={{ color: "red" }}
                colorText={"white"}
              />
              <h3>Java</h3>
            </Col>
          </Row>
        </Col>
        <Col className="right">
          <Row className="la">
            <div className="circle">
              <img src={bag} width={30} />
            </div>
            <h2>SOFTAWRE</h2>
          </Row>
          <br />
          <div className="divider"></div>
          <br />
          <Col>
            <h3 className="softwareName">MS OFFICE</h3>
            <Progress
              percent={90}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">PHOTOSHOP</h3>
            <Progress
              percent={70}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">COREL DRAW</h3>
            <Progress
              percent={90}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">ILLUSTRATOR</h3>
            <Progress
              percent={75}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">CANVA</h3>
            <Progress
              percent={99}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">FIGMA</h3>
            <Progress
              percent={80}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
          <Col>
            <h3 className="softwareName">BLENDER</h3>
            <Progress
              percent={50}
              strokeColor={"var(--greenColor)"}
              trailColor={"#454545"}
            />
          </Col>
        </Col>
      </Row>
    </>
 )
}