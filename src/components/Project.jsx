import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack MERN-based e-commerce platform for electronic gadgets, featuring user authentication, product listings, cart management, secure checkout, and an admin dashboard for inventory management. Optimized for seamless shopping experiences with responsive UI and efficient API handling.",
      imgUrl: "/e-commerce.png",
    },
    {
      title: "Project Management System",
      description: "A web-based project management tool built using the MERN stack, enabling users to create, track, and manage projects efficiently. Includes features like project status updates, sorting, pagination, dynamic charts, and role-based access control for better collaboration.",
      imgUrl: "/appoint.png",
    },
    {
      title: "Appointment Management System",
      description: "A MERN-based appointment scheduling platform for patients and doctors, facilitating easy appointment booking, rescheduling, and real-time status tracking. Includes authentication, calendar integration, and role-based functionalities for a smooth user experience.",
      imgUrl: "/project.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Developed and implemented dynamic web applications, including an E-commerce platform, a Project Management System, and an Appointment Management System using the MERN stack. Focused on user-friendly interfaces, efficient data handling, and seamless functionality to enhance user experience and performance.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">MERN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src="/color-sharp2.png"></img>
    </section>
  )
}
