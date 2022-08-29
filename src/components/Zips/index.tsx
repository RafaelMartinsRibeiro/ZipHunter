import { CepTable } from "./CepTable";
import { Map } from "./Map";

import "./styles.scss"

export const Zips = () => {
  return (
    <div className="stateZips">
      <div>
        <h3>Faixas de CEPS do Brasil</h3>
      </div>
      <Map />
      <CepTable />
    </div>
  );
};
