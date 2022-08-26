import Chart from "react-google-charts";
import { data, options } from "../../data";

export const Map = () => {
  return (
    <div>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
};
