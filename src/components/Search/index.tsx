import { useContext } from "react";

import { FaSearchLocation } from "react-icons/fa";

import "./styles.scss";
import { ZipContext } from "../../contexts/ZipContext";

export const Search = () => {
  const { zipCode, handleZipCodeChange } = useContext(ZipContext);

  return (
    <div className="container">
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
              maxLength={8}
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
    </div>
  );
};
