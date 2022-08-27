import { useContext } from "react";
import { ZipContext } from "../../contexts/ZipContext";
import loader from "../../assets/loader.svg";

import "./styles.scss";

export const Infos = () => {
  const { zip, isLoading, zipCode } = useContext(ZipContext);

  return (
    <div className="infoContainer">
      <h2>Informações do CEP procurado: </h2>

      <p>CEP procurado: {zipCode.length === 8 && <span>{zipCode}</span>}</p>

      <div className="zipInfo">
        <div>
          <h3>Estado: </h3>
          {isLoading ? (
            <div>
              <img src={loader} alt="loader" />
            </div>
          ) : (
            <span>
              {zipCode.length < 8 && "Digite o CEP"}{" "}
              {zip?.ok && zip?.state !== "" ? zip.state : zip?.message}
              {zip?.ok && !zip?.state && "Não encontrado"}
            </span>
          )}
        </div>
        <div>
          <h3>Cidade: </h3>
          {isLoading ? (
            <div>
              <img src={loader} alt="loader" />
            </div>
          ) : (
            <span>
              {zipCode.length < 8 && "Digite o CEP"}
              {zip?.ok && zip?.city !== "" ? zip.city : zip?.message}
              {zip?.ok && !zip?.city && "Não encontrado"}
            </span>
          )}
        </div>
        <div>
          <h3>Bairro: </h3>
          {isLoading ? (
            <div>
              <img src={loader} alt="loader" />
            </div>
          ) : (
            <span>
              {zipCode.length < 8 && "Digite o CEP"}
              {zip?.ok && zip?.district !== "" ? zip?.district : zip?.message}
              {zip?.ok && !zip?.district && "Não encontrado"}
            </span>
          )}
        </div>
        <div>
          <h3>Endereço: </h3>
          {isLoading ? (
            <div>
              <img src={loader} alt="loader" />
            </div>
          ) : (
            <span>
              {zipCode.length < 8 && "Digite o CEP"}
              {zip?.ok && zip?.address !== "" ? zip.address : zip?.message}
              {zip?.ok && !zip?.address && "Não encontrado"}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
