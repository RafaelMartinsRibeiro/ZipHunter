import { ceps } from "../../data";

import "./styles.scss";

export const CepTable = () => {
  return (
    <div className="cepContainer">
      {ceps.map((cep) => {
        return (
          <div className="cepTable">
            <h4>{cep.estado}</h4>
            <p>{cep.cep}</p>
          </div>
        );
      })}
    </div>
  );
};
