import { useState } from "react";
import { getImages } from "../articles-api";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
  const [images, setImages] = useState([]);

  const handleSearch = async (newImages) => {
    const data = await getImages(newImages);
    setImages(data);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  );
}
