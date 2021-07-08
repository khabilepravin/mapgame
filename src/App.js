import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "reactstrap";

import MapTest from "./components/maptest";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row>
          <Col>
            <FontAwesomeIcon icon={faMap} /> Map
          </Col>
        </Row>
      </header>
      <body>
        <MapTest />
      </body>
    </div>
  );
}

export default App;
