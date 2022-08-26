import { useContext, useEffect, useState } from "react";
import fetchZip from "./services/fetchZip";
import { Map } from "./components/Map";
import { Zip } from "./type";
import { GiFlyingTarget } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";

import "./styles/app.scss";
import { ZipContext } from "./contexts/ZipContext";

const App = () => {
  const { zipCode, zip, isLoading, handleZipCodeChange } =
    useContext(ZipContext);

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
            <h1>Procure e encontre zipS de todo o Brasil</h1>
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
              <span>
                <FaSearchLocation />
              </span>
            </div>
          </form>
        </div>

        <div className="zipData">
          <h3>
            Estado:{" "}
            {/* {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{zip?.ok ? zip.state : zip?.message}</span>
            )} */}
            <span>PR</span>
          </h3>
          <h3>
            Cidade:{" "}
            {/* {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{zip?.ok ? zip.city : zip?.message}</span>
            )} */}
            <span>Marialva</span>
          </h3>
          <h3>
            Bairro:{" "}
            {/* {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{zip?.ok ? zip.district : zip?.message}</span>
            )} */}
            <span>Jd.Paraíso</span>
          </h3>
          <h3>
            Endereço:{" "}
            {/* {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{zip?.ok ? zip.address : zip?.message}</span>
            )} */}
            <span>Rua Shigueisa Okumura</span>
          </h3>
        </div>

        {/* <Map /> */}
      </main>
    </div>
  );
};

export default App;
