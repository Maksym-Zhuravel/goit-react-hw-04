export default function ImageCard({
  images: { alt_description, urls, likes },
  onClick,
}) {
  const handleClick = () => {
    onClick(urls.full, alt_description, likes);
  };

  return (
    <div>
      <img src={urls.small} alt={alt_description} onClick={handleClick} />
      <span>Likes: {likes}</span>
    </div>
  );
}
