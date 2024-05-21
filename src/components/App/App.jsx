import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import { useEffect, useState } from "react";
import { getImages } from "../articles-api";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";

export default function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }
    async function fetchImages() {
      try {
        setError(false);
        setLoading(true);
        const data = await getImages(query, page);
        setImages((prevImages) => [...prevImages, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page, query]);

  const handleSearch = async (newImages) => {
    setQuery(newImages);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      <LoadMoreBtn onClick={handleLoadMore} />
    </>
  );
}
