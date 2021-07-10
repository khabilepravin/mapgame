import React from "react";

const Result = (props) => {
    return <h2>{JSON.stringify(props.location.state)}</h2>;
}

export default Result;