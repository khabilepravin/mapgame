import React, { useEffect } from "react";
import Chart from "react-google-charts";

const Map = React.memo((props) => {
  return (
    <Chart
      width={"600px"}
      height={"400px"}
      chartType="GeoChart"
      data={[
        ["Country"],
        [props.currentCountry]
      ]}
      // Note: you will need to get a mapsApiKey for your project.
      // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
      mapsApiKey={process.env.REACT_APP_mapApiKey}
      rootProps={{ "data-testid": "1" }}
      options={{ "domain":"IN", defaultColor:'#0000FF',"enableRegionInteractivity":false }}
    />
  );
});

export default Map;
