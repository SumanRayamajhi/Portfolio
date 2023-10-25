import React from "react";
import "./Project.css";
import Card from "react-bootstrap/Card";
import PunkBeer from "../../assets/punk-beer.jpg";
import TicTacToe from "../../assets/tic-tac-toe-game.jpg";
import ToDoList from "../../assets/to-do-list.jpg";
import Calculator from "../../assets/calculator.jpg";
import Giphy from "../../assets/giphy-app.jpg";
import CandyCrush from "../../assets/candy-crush.jpg";
import ConnectFour from "../../assets/connect-four.jpg";

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
            <div className="project__box pointer relative">
              <Card className="Project__Cards">
                <Card.Img
                  variant="top"
                  className="Project__Image"
                  src={PunkBeer}
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
                  src={TicTacToe}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Tic Tac Toe Game
                  </Card.Title>
                  <Card.Text className="discription">
                    Tic tac toe game using Reactjs.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <a
                    href="https://github.com/SumanRayamajhi/tik-tak-toe-game"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://tic-tac-toe-game-a70aa.web.app/"
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
                  src={ToDoList}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    To Do List
                  </Card.Title>
                  <Card.Text className="discription">
                    To do list App, we can add different activities. We can
                    delete and marked as done and also can filter completed and
                    uncompleted task.
                  </Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}

                  <a
                    href="https://github.com/SumanRayamajhi/to-do-app"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://to-do-list-cea9d.web.app/"
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
                  src={Calculator}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Redux Calculator
                  </Card.Title>
                  <Card.Text className="discription">
                    Calculator, using react-redux library.
                  </Card.Text>
                  <a
                    href="https://github.com/SumanRayamajhi/Redux--Calculator"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://redux-calculator-1bf1e.web.app/"
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
                  src={Giphy}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Giphy API
                  </Card.Title>
                  <Card.Text className="discription">
                    Giphy API using React freamework, added search box and the
                    pages.
                  </Card.Text>
                  <a
                    href="https://github.com/SumanRayamajhi/Giphy-API"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://giphy-api-ba696.web.app/"
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
                  src={CandyCrush}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Candy Crush Game
                  </Card.Title>
                  <Card.Text className="discription">
                    Simple Candy Crush game using React framework.
                  </Card.Text>
                  <a
                    href="https://github.com/SumanRayamajhi/CandyCrush-Game"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://candycrush-f09a4.web.app/"
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
                  src={ConnectFour}
                />
                <Card.Body>
                  <Card.Title className="Portfolio__title">
                    Connect Four Game
                  </Card.Title>
                  <Card.Text className="discription">
                    Connect Four Game using React framework.
                  </Card.Text>
                  <a
                    href="https://github.com/SumanRayamajhi/Connect-Four-Game/tree/master/src"
                    className="project__btn"
                  >
                    Code
                  </a>
                  <a
                    href="https://connect-four-game-aebdd.web.app/"
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
