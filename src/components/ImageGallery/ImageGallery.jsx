import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ images, onClick }) {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageCard images={image} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
