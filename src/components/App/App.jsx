import { useEffect, useState } from "react";
import axios from "axios";
import { getImages } from "../articles-api";
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
      const fetchedImages = await getImages();
      setImages(fetchedImages);
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
