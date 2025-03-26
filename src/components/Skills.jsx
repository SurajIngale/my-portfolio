import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Proficient in React.js, Node.js, Express.js, MongoDB, and frontend styling with CSS, Bootstrap, and Tailwind CSS.<br/> Strong in API development, performance optimization, and problem-solving.</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src="/my-portfolio/my-portfolio/React.png" alt="Image" />
                                <h5>React Js</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/Node.js.png" alt="Image" />
                                <h5>Node Js</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/Express.png" alt="Image" />
                                <h5>Express Js</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/MongoDB.png" alt="Image" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/JavaScript.png" alt="Image" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/HTML5.png" alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/CSS3.png" alt="Image" />
                                <h5>CSS3</h5>
                            </div>
                            <div className="item">
                                <img src="/my-portfolio/Bootstrap.png" alt="Image" />
                                <h5>Bootstrap</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src="/color-sharp.png" alt="Image" />
    </section>
  )
}
