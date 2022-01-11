import React from "react";
import "./Project.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading"> My Latest Project</h1>
        <p className="heading p__color">
          These are my few projects and are still on under-construction
        </p>
        {/* <p className="heading p__color">............................</p> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box ">
              {/* <div className="project__box__img pointer relative"> */}
              {/* <div className="project__img__box">
                  <img
                    src="./img/Hoste-1.png"
                    alt="img"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting ticket to big.....</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div> */}
              <Card className="Project__Cards">
                <Card.Img
                  className="Project__Image"
                  variant="top"
                  src="./img/hostellife-3.jpg"
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Hostel Life
                  </Card.Title>
                  <Card.Text className="discription">
                    It is a final project made by group of friends using
                    Bootstrap, React.js, Node.js and PostgreSQL
                  </Card.Text>

                  <a
                    href="https://github.com/HostelLife/HostelLife"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://hostel-life-app.herokuapp.com"
                    className="project__btn"
                    style={{ marginLeft: "1rem" }}
                  >
                    Link
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box">
              {/* <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src="./img/portfolio-2.jpg"
                    alt="img"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting ticket to big.....</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div> */}
              <Card className="Project__Cards">
                <Card.Img
                  className="Project__Image"
                  variant="top"
                  src="./img/chat-message-7.jpg"
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Chat Server
                  </Card.Title>
                  <Card.Text className="discription">
                    It is the first project where I connect front-end (React.js)
                    and back-end(PostgreSQL and Node.js) together.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <a
                    href="https://github.com/SumanRayamajhi/node-challenge-chat-server"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="#"
                    className="project__btn"
                    style={{ marginLeft: "1rem" }}
                  >
                    Link
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="col__3">
            <div className="project__box pointer relative">
              {/* <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img
                    src="./img/portfolio-3.jpg"
                    alt="img"
                    className="project__img"
                  />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h5 className="project__text">Development</h5>
                <h4 className="project__text">Getting ticket to big.....</h4>
                <a href="#" className="project__btn">
                  View Details
                </a>
              </div> */}
              <Card className="Project__Cards">
                <Card.Img
                  variant="top"
                  className="Project__Image"
                  src="Img/beer-6.jpg"
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Punk Beer API
                  </Card.Title>
                  <Card.Text className="discription">
                    It is the project where, I am trying to aply all the stuff
                    that I have learned, and is still under process.
                  </Card.Text>

                  <a
                    href="https://github.com/SumanRayamajhi/Punk-Beer-Api"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://punk-beer-api-5d9c3.web.app/"
                    className="project__btn"
                    style={{ marginLeft: "1rem" }}
                  >
                    Link
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>

          {/* <div className="view__more_btn d__flex align__items__center justify__content__center pxy__30">
            <button className="view__more pointer btn"> View More</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Project;
