import React, { useState } from "react";
import Chart from "react-google-charts";
import { Container, Row, Col, Table, Badge, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";
import {
  faTimes,
  faCheck,
  faGamepad,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

const ResultMap = React.memo((props) => {
  const history = useHistory();
  const handleNewGameClick = () => {
    history.push("/");
  };

  if (props.location.state) {
    let chartData = [["Country", "Guessed"]];

    props.location.state.map((result) => {
      chartData.push([result.countryName, result.isCorrect ? 0 : 1]);
    });

    return (
      <Container>
        <br/>
        <Row>
          <Col className="d-flex justify-content-right">
            <Button color="primary" onClick={handleNewGameClick}>
              <FontAwesomeIcon icon={faGamepad} /> New Game
            </Button>
          </Col>
          <Col className="d-flex justify-content-center">
            <h6>Click or tap to see country names</h6>
          </Col>
          <Col className="d-flex justify-content-end">
            <Badge color="danger">
              <h6>
                <FontAwesomeIcon icon={faTimes} />
              </h6>
            </Badge>
            <Badge color="success">
              <h6>
                <FontAwesomeIcon icon={faCheck} />
              </h6>
            </Badge>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
         
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Chart
              width={"800px"}
              height={"600px"}
              chartType="GeoChart"
              data={chartData}
              mapsApiKey={process.env.REACT_APP_mapApiKey}
              rootProps={{ "data-testid": "2" }}
              options={{
                domain: "IN",
                defaultColor: "#0000FF",
                enableRegionInteractivity: true,
                colorAxis: { colors: ["green", "red"] },
              }}
            />
          </Col>
        </Row>
        
        
      </Container>
    );
  } else {
    return <h2>No results</h2>;
  }
});

export default ResultMap;
