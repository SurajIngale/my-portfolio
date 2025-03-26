import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col >
      <div className="project-box">
      <div className="proj-imgbx">
        <img src={imgUrl} />
      </div>
      <div className="proj-info">
          <h3>{title}</h3>
          <h6>{description}</h6>
          <div className="proj-tag">
            <span>React</span>
            <span>Node</span>
            <span>Express</span>
            <span>MongoDb</span>
            <span>JavaScript</span>
          </div>
          <div>
          <button className="glow-on-hover" type="button">Github</button>
          </div>
        </div>
      </div>
    </Col>
  )
}
