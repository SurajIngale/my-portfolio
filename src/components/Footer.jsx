import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col sm={6}>
            <h1>Suraj.</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <img src="/nav-icon1.svg" alt="LinkedIn Profile" />
              </a>
            </div>
            <p>© 2025 Suraj. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
