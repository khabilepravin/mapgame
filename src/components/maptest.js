import React, { useState, useRef } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Progress,
  Input,
  Form,
  Badge,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faCheck } from "@fortawesome/free-solid-svg-icons";

import CountriesData from "../data";
import Map from "./map";

const MapTest = () => {
  const totalCountriesInATest = 5;
  const [buttonText, setButtonText] = useState("Next");
  const [buttonClass, setButtonClass] = useState("primary");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCountry, setCurrentCountry] = useState('Australia');

  const moveToNextCountry = (event) => {
    event.preventDefault();
    const countries = JSON.parse(CountriesData);
    const randomIndex = getRandomIndex(countries.length);
    setCurrentCountry(countries[randomIndex].countryName);
  };

  const getRandomIndex = (max) =>{
    return Math.floor(Math.random() * max);
  }

  return (
    <Form onSubmit={moveToNextCountry}>
      <Container>
        {" "}
        <Row>
          <Col className="d-flex justify-content-center">
            <Map currentCountry={currentCountry}/>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Input
              type="text"
              placeholder="Enter Country Name"
              spellCheck="false"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              autoFocus={true}
              className="input-lg"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Progress value={currentIndex + 1} max={totalCountriesInATest}>
              <span color="danger">
                {currentIndex + 1} of {totalCountriesInATest}
              </span>
            </Progress>
            <br />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color={buttonClass} type="submit">
              <FontAwesomeIcon
                icon={buttonText == "Done" ? faCheck : faForward}
              />{" "}
              {buttonText}
            </Button>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default MapTest;