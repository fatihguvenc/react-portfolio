import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//Custom CSS
import "./styles/global.css";
//Components
import Navbar from "./components/Navbar";
//Pages
import MyWork from "./pages/MyWorks";
import Comments from "./pages/Comments";
import About from "./pages/About";
import Contact from "./pages/Contact"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <div className="row">
            <Switch>
              <Route path="/yaptigim-isler">
                <MyWork />
              </Route>
              <Route path="/yorumlar">
                <Comments />
              </Route>
              <Route path="/iletisim">
                <Contact />
              </Route>
              <Route path="/">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
