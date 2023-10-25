import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Project from "./Components/Project/Project";
import ContactMe from "./Components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Project />
      <ContactMe />
    </div>
  );
}

export default App;
