import axios from "axios";

const fetchCep = async (cep: string) => {
  const url = `https://ws.apicep.com/cep/${cep}.json]`;

  const response = await axios.get(url);

  return response.data;
};

export default fetchCep;
