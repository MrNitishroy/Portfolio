import { Col, Row, Modal } from "antd";
import "./Projects.css";
import p1 from "../../Assets/Images/Projects/android app.png";
import p2 from "../../Assets/Images/Projects/p2.jpg";
import p3 from "../../Assets/Images/Projects/p3.jpg";
import p4 from "../../Assets/Images/Projects/p4.png";
import p5 from "../../Assets/Images/Projects/p5.png";
import p6 from "../../Assets/Images/Projects/p6.png";
import { useState } from "react";

const projectsList = [
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p1,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p2,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p3,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p4,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p5,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Doctor Shree Doctor Apointment app ( Flutter )",
    describtion:
      "i this project i have maked a full app for doctor appointment app i this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment appi this project i have maked a full app for doctor appointment app",
    coverImage: p6,
    featureList: [
      "Firebase authentication",
      "Realtime Status monitoring ",
      "Find best doctor near you ",
    ],
    languageUse: ["Html/css", "Flutter/Dart", "C#/.net"],
    date: "20-jan-2022",
    members: ["Nitish kumar", "Vikash Kumar", "Rishi Kumar"],
    githubUrl: "",
    liveUrl: "",
  },
];
export function Projects() {
  const [modeData, setModelData] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onSelect = (e) => {
    setIsModalOpen(true);
    setModelData(e);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <h2>Projects</h2>
      <div className="divider"></div>
      <br />
      <br />
      <Row style={{ gap: "40px" }} justify={"space-between"}>
        {projectsList.map((e) => (
          <Col
            onClick={() => onSelect(e)}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={11}
            className="projectBox"
          >
            <img
              src={e.coverImage}
              width={"100%"}
              height={230}
              className="coverImg"
            />
            <h3 className="projectTitle">{e.title}</h3>
          </Col>
        ))}
      </Row>
      <Modal
        className="projectDetails"
        title="Basic Modal"
        open={isModalOpen}
        centered={true}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{modeData.title}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
