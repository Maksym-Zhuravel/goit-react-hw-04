export default function ImageCard({
  images: { alt_description, urls, likes },
}) {
  return (
    <div>
      <img src={urls.small} alt={alt_description} />
      <span>Likes: {likes}</span>
    </div>
  );
}
