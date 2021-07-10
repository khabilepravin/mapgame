import React from "react";
import { Table, Badge, Button, Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faGamepad, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const Result = (props) => {
    const history = useHistory();
    const handleNewGameClick = () => {
        history.push("/");
    };

    if(props.location.state)
    {
        return (
            <Container>
              <br/>
              <Row>
                <Col>
                  <h4><FontAwesomeIcon icon={faListAlt}/> Results</h4>
                </Col>
                <Col>
                  <Button
                    color="primary"
                    className="float-right"
                    onClick={handleNewGameClick}
                  >
                    <FontAwesomeIcon icon={faGamepad} /> New Game
                  </Button>
                </Col>
              </Row>
              <br/>
              <Table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Your Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {props.location.state.map((result) => {
                    return (
                      <tr key={result.countryName}>
                        <th>
                          <Badge color="success">
                            <h6>{result.countryName}</h6>
                          </Badge>
                        </th>
                        <th>
                          <Badge color={result.isCorrect ? "primary" : "danger"}>
                            <h6>{result.userEnteredAnswer}</h6>
                          </Badge>{" "}
                          {}
                          <FontAwesomeIcon
                            icon={result.isCorrect ? faCheck : faTimes}
                            color="primary"
                          />
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Container>)
    }
    else{
        return <h2>No results</h2>;
    }
    
}

export default Result;