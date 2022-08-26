import { useContext } from "react";
import { ZipContext } from "../../contexts/ZipContext";

import "./styles.scss";

export const ZipData = () => {
  const { zip, isLoading } = useContext(ZipContext);

  return (
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
  );
};
