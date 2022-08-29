import { createContext, ReactNode, useEffect, useState } from "react";
import fetchZip from "../services/fetchZip";
import { Zip } from "../type";

interface ZipContextData {
  zipCode: string;
  zip?: Zip;
  isLoading?: Boolean;
  handleZipCodeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ZipProviderProps {
  children: ReactNode;
}

export const ZipContext = createContext({} as ZipContextData);

export function ZipProvider({ children }: ZipProviderProps) {
  const [zipCode, setZipCode] = useState("");
  const [zip, setZip] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (zipCode.length === 8) {
      setIsLoading(true);
      const fetchData = async (zip: string) => {
        const data = await fetchZip(zip).finally(() => {
          setIsLoading(false);
        });
        setZip(data);
      };

      fetchData(zipCode);
    } else {
      setZip(undefined);
    }
  }, [zipCode]);

  const handleZipCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setZipCode(e.target.value.replace(/[^\d]/g, ""));
  };

  return (
    <ZipContext.Provider
      value={{
        zipCode,
        zip,
        isLoading,
        handleZipCodeChange,
      }}
    >
      {children}
    </ZipContext.Provider>
  );
}
