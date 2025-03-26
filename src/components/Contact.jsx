import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails(prevDetails => ({
      ...prevDetails,
      [category]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
        const response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDetails),
          });
          

        const result = await response.json();
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: result.success, message: result.message });
    } catch (error) {
        setButtonText("Send");
        setStatus({ success: false, message: "Error sending message!" });
    }
};

  

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src="/my-portfolio/contact-img.svg" alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" 
                          onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" 
                          onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" 
                          onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." 
                          onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" 
                          onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
