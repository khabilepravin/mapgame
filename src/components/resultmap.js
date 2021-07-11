import React, { useState } from "react";
import Chart from "react-google-charts";
import { Container, Row, Col, Table, Badge, Button, Alert } from "reactstrap";
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
        <br />
        <Alert color="primary">Mouseover or tap on the map to see country names</Alert>
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
        <br />
        <br />
        <Button
          color="primary"
          onClick={handleNewGameClick}
          className="d-flex justify-content-end"
        >
          <FontAwesomeIcon icon={faGamepad} /> New Game
        </Button>
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
