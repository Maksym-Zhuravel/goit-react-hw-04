import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async () => {
  const response = await axios.get(
    "search/photos?client_id=4yKS7ti03CDkZBSmRWli3PGmFjeATL3yf--1shu4VWY&page=1&query=cat"
  );
  return response.data.results;
};
