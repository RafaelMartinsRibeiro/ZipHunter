import Chart from "react-google-charts";
import { data, options } from "../../data";

import "./styles.scss";

export const Map = () => {
  return (
    <div className="mapContainer">
      <div>
        <h3>Faixas de CEPS do Brasil</h3>
      </div>
      <Chart chartType="GeoChart" data={data} options={options} />
    </div>
  );
};
