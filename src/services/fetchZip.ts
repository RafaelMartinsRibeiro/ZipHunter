import axios from "axios";

const fetchZip = async (zip: string) => {
  const url = `https://ws.apicep.com/cep/${zip}.json]`;

  const response = await axios.get(url);

  return response.data;
};

export default fetchZip;
