import { useEffect, useState } from "react";
import fetchCep from "./services/fetchCep";
import { Map } from "./components/Map";
import { Cep } from "./type";
import { GiFlyingTarget } from "react-icons/gi";
import { FaSearchLocation } from "react-icons/fa";

import "./styles/app.scss";

const App = () => {
  const [cepCode, setCepCode] = useState("");
  const [cep, setCep] = useState<Cep>();
  const [isLoading, setIsLoading] = useState<Boolean>();

  useEffect(() => {
    if (cepCode.length === 8) {
      setIsLoading(true);
      const fetchData = async (cep: string) => {
        const data = await fetchCep(cep).finally(() => {
          setIsLoading(false);
        });
        setCep(data);
      };

      fetchData(cepCode);
    } else {
      setCep(undefined);
    }
  }, [cepCode]);

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
                value={cepCode}
                placeholder="Informe o CEP"
                onChange={(e) => setCepCode(e.target.value)}
              />
              <span>
                <FaSearchLocation />
              </span>
            </div>
          </form>
        </div>

        {/* <div>
          <h3>
            Estado:{" "}
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{cep?.ok ? cep.state : cep?.message}</span>
            )}
          </h3>
          <h3>
            Cidade:{" "}
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{cep?.ok ? cep.city : cep?.message}</span>
            )}
          </h3>
          <h3>
            Bairro:{" "}
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{cep?.ok ? cep.district : cep?.message}</span>
            )}
          </h3>
          <h3>
            Endereço:{" "}
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>{cep?.ok ? cep.address : cep?.message}</span>
            )}
          </h3>
        </div> */}

        {/* <Map /> */}
      </main>
    </div>
  );
};

export default App;
