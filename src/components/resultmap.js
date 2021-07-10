import React from "react";
import Chart from "react-google-charts";

const ResultMap = () => {
    return  <Chart
    width={"600px"}
    height={"400px"}
    chartType="GeoChart"
    data={[
      ["Country"],
      ["India"],
      ["Australia"]
    ]}
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    mapsApiKey="YOUR_KEY_HERE"
    rootProps={{ "data-testid": "1" }}
    options={{ "domain":"IN", defaultColor:'#0000FF',"enableRegionInteractivity":true, displayMode:'markers' }}
  />;
};

export default ResultMap;