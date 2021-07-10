import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import MapTest from "./components/maptest";
import Result from "./components/result";
import ResultMap from "./components/resultmap";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Row>
            <Col>
              <FontAwesomeIcon icon={faMap} /> Map
            </Col>
          </Row>
        </header>
        <body>
          <Switch>
            <Route path="/" exact component={MapTest} />
            <Route path="/result" component={Result} />
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
