import Chart from "react-google-charts";
import { mapData, options } from "../../../data";

import "./styles.scss";

export const Map = () => {
  return (
    <div className="mapContainer">
      <Chart chartType="GeoChart" data={mapData} options={options} />
    </div>
  );
};
