import React, { useState } from "react";
import Chart from "react-google-charts";
import { Container, Row, Col, Table, Badge, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck, faGamepad, faListAlt } from "@fortawesome/free-solid-svg-icons";

const ResultMap = React.memo((props) => {
  if (props.location.state) {   
    let chartData = [["Country", "Guessed"]];

  props.location.state.map(result => {
    chartData.push([result.countryName, result.isCorrect ? 0 : 1]);
  });

    return (
      <Container>
        <Row>
          <Col className="d-flex justify-content-center">
            <Chart
              width={"600px"}
              height={"400px"}
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
        <br/>
        <Row>
          <Col>
              Legend: <Badge color="danger">
                  <FontAwesomeIcon icon={faTimes}/>
                </Badge> { } <Badge color="success">
                  <FontAwesomeIcon icon={faCheck}/>
                </Badge>
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <h2>No results</h2>;
  }
});

export default ResultMap;
