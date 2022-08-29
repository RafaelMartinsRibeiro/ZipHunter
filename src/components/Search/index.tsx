import { useContext } from "react";

import { GiFlyingTarget } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";

import "./styles.scss";
import { ZipContext } from "../../contexts/ZipContext";
import { Infos } from "../Infos";
import { Map } from "../Map";
import { CepTable } from "../CepTable";

export const SearchZip = () => {
  const { zipCode, handleZipCodeChange } = useContext(ZipContext);

  return (
    <div className="container">
      <header className="header">
        <div className="title">
          <span>Zip</span>Hunter
        </div>
        <GiFlyingTarget />
      </header>

      <main>
        <div className="formContainer">
          <form className="form">
            <h1>Procure e encontre CEPS de todo o Brasil</h1>
            <span>
              O ZipHunter ajuda você a encontrar um CEP e tudo que esteja
              relacionado a ele.
            </span>

            <div className="searchBar">
              <input
                type="text"
                value={zipCode}
                placeholder="Informe o CEP"
                onChange={handleZipCodeChange}
              />
              <span
                style={
                  zipCode.length === 8
                    ? { color: "#ffd400" }
                    : { color: "#0c1014" }
                }
              >
                <FaSearchLocation />
              </span>
            </div>
          </form>
        </div>

        <Infos />

        <div className="stateZips">
          <h3>Faixas de CEPS do Brasil</h3>
          <Map />
          <CepTable />
        </div>
      </main>
    </div>
  );
};
