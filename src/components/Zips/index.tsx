import { CepTable } from "../CepTable";
import { Map } from "./Map";

export const Zips = () => {
  return (
    <div className="stateZips">
      <h3>Faixas de CEPS do Brasil</h3>
      <Map />
      <CepTable />
    </div>
  );
};
