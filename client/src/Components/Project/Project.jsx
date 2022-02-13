import React from "react";
import "./Project.css";
import Card from "react-bootstrap/Card";

function Project() {
  return (
    <div className="project component__space" id="Project">
      <div className="heading">
        <h1 className="heading"> My Latest Project</h1>
        <p className="heading p__color">
          These are my few projects and are still on under-construction
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box ">
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
                    Final project made by group of friends using PERN stack with
                    CRUD operations, including Bootstrap for the framework.
                  </Card.Text>

                  <a
                    href="https://github.com/HostelLife/HostelLife"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="http://hostel-life-app.herokuapp.com/"
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
              <Card className="Project__Cards">
                <Card.Img
                  variant="top"
                  className="Project__Image"
                  src="./img/punk-beer.jpg"
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Punk Beer API
                  </Card.Title>
                  <Card.Text className="discription">
                    Project with punk-API, using Reactjs. We can select a
                    favourites with clicking the stars and also delete the
                    favourite.
                  </Card.Text>

                  <a
                    href="https://github.com/SumanRayamajhi/API-punk-beer"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://api-punk-beer.web.app/"
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
                    First project using PERN stack, and is under construction to
                    add different functionalities.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <a
                    href="https://github.com/SumanRayamajhi/node-challenge-chat-server"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://chat-server-frontend.herokuapp.com/"
                    className="project__btn"
                    style={{ marginLeft: "1rem" }}
                  >
                    Link
                  </a>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
