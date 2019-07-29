import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import LargeLogo from "../components/SubComponents/Logo/LargeLogo";

class About extends Component {
  render() {
    return (
      <Container fluid={true} className="backgroundHead test overflow-auto pb-5">
        <Row>
          <LargeLogo />
        </Row>
        <br />
        <Row>
          <h1 className="mx-auto">Meet the Team</h1>
        </Row>
        <br />
        <Row>
          <Col>
            <div className="card mx-auto align-self-center borderSplash backG rounded">
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body font-weight-bold p-1">
                <h2 className="text-center">Harrison</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeterea sublata cognitione et scientia tollitur omnis ratio
                  et vitae degendae et rerum gerendarum. Si enim ad populum me vocas, eum. Huius ego nunc auctoritatem sequens idem faciam.
                  Cur igitur, cum de re conveniat, non malumus usitate loqui?
                </p>
                <ul className="social text-center">
                  <li><a href="https://www.linkedin.com/in/harrison-fales-419585b0/" className="fab fa-linkedin icon"><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://github.com/harblesin" className="icon fab fa-github"><span className="label">Github</span></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card mx-auto align-self-center borderSplash backG rounded">
              <img src="./images/developers/daniel4.jpg" class="card-img-top aboutImgFix" alt="..." />
              <div className="card-body font-weight-bold p-1">
                <h2 className="text-center">Daniel</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeterea sublata cognitione et scientia tollitur omnis ratio
                  et vitae degendae et rerum gerendarum. Si enim ad populum me vocas, eum. Huius ego nunc auctoritatem sequens idem faciam.
                  Cur igitur, cum de re conveniat, non malumus usitate loqui?
                </p>
                <ul className="social text-center">
                  <li><a href="https://www.linkedin.com/in/daniel-bryant-b3418a9b/" className="fab fa-linkedin icon"><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://github.com/Minority85" className="icon fab fa-github"><span className="label">Github</span></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card mx-auto align-self-center borderSplash backG rounded">
              <img src="..." class="card-img-top" alt="..." />
              <div className="card-body font-weight-bold p-1">
                <h2 className="text-center">James</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeterea sublata cognitione et scientia tollitur omnis ratio
                  et vitae degendae et rerum gerendarum. Si enim ad populum me vocas, eum. Huius ego nunc auctoritatem sequens idem faciam.
                  Cur igitur, cum de re conveniat, non malumus usitate loqui?
                </p>
                <ul className="social text-center">
                  <li><a href="https://www.linkedin.com/in/jamesrader14/" className="fab fa-linkedin icon"><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://github.com/jamesrader" className="icon fab fa-github"><span className="label">Github</span></a></li>
                </ul>
              </div>
            </div>
          </Col>
          <Col>
            <div className="card mx-auto align-self-center borderSplash backG rounded">
              <img src="./images/developers/jonathanProject3.jpg" class="card-img-top" alt="..." />
              <div className="card-body font-weight-bold p-1">
                <h2 className="text-center">Jonathan</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praeterea sublata cognitione et scientia tollitur omnis ratio
                  et vitae degendae et rerum gerendarum. Si enim ad populum me vocas, eum. Huius ego nunc auctoritatem sequens idem faciam.
                  Cur igitur, cum de re conveniat, non malumus usitate loqui?
                </p>
                <ul className="social text-center">
                  <li><a href="https://www.linkedin.com/in/jonathan-sherman-39090184/" className="fab fa-linkedin icon"><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://github.com/sherman0513" className="icon fab fa-github"><span className="label">Github</span></a></li>
                </ul>
              </div>
            </div>

          </Col>
        </Row>
      </Container >
    );
  }
}

export default About;
