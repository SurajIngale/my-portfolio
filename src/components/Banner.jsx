import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "MERN Stack Developer", "Full Stack Developer", "UI/UX Designer" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Suraj Ingale`} <br/> <span className="txt-rotate" dataPeriod="500" data-rotate='[ "MERN Stack Developer", "Full Stack Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I'm Suraj Ingale, a MERN Stack Developer passionate about building scalable and dynamic web applications. I specialize in React.js, Node.js, Express.js, and MongoDB, focusing on clean code and performance optimization. Always eager to learn and innovate! 🚀</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn tech-container" : ""}>
                  <img className="tech-img1" src="/my-portfolio/React.png" alt="Header Img"/>
                  <img className="tech-img9" src="/my-portfolio/Express.png" alt="Header Img"/>
                  <img className="tech-img3" src="/my-portfolio/Node.js.png" alt="Header Img"/>
                  <img className="tech-img4" src="/my-portfolio/MongoDB.png" alt="Header Img"/>
                  <img className="tech-img5" src="/my-portfolio/HTML5.png" alt="Header Img"/>
                  <img className="tech-img6" src="/my-portfolio/CSS3.png" alt="Header Img"/>
                  <img className="tech-img7" src="/my-portfolio/JavaScript.png" alt="Header Img"/>
                  <img className="tech-img8" src="/my-portfolio/vscode.png" alt="Header Img"/>
                  <img className="tech-img2" src="/my-portfolio/Postman.png" alt="Header Img"/>
                  <img className="tech-img0" src="/my-portfolio/git.png" alt="Header Img"/>
                  <img className="tech-img10" src="/my-portfolio/Bootstrap.png" alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
