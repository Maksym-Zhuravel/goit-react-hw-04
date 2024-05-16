import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState([]);

  const handleSearch = (newSearch) => {
    setSearch(newSearch);
  };

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos?client_id=4yKS7ti03CDkZBSmRWli3PGmFjeATL3yf--1shu4VWY&page=1&query={dog}"
      );

      setImages(response.data.results);
      console.log(response.data.results);
    }

    fetchImages();
  }, []);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
