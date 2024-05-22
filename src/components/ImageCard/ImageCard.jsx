import css from "../ImageCard/ImageCard.module.css";

export default function ImageCard({
  images: { alt_description, urls, likes },
  onClick,
}) {
  const handleClick = () => {
    onClick(urls.regular, alt_description, likes);
  };

  return (
    <div>
      <img
        src={urls.small}
        alt={alt_description}
        onClick={handleClick}
        className={css.img}
      />
    </div>
  );
}
