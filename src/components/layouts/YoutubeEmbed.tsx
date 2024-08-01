import getYouTubeID from "get-youtube-id";

export const YouTubeEmbed = ({ value }: { value: any }) => {
  const id = getYouTubeID(value);
  const url = `https://www.youtube.com/embed/${id}`;
  if (!id) {
    return <div>Missing YouTube URL</div>;
  }
  return (
    <iframe
      title="YouTube Preview"
      className="w-full rounded-xl h-96"
      src={url}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    />
  );
};
