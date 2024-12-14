const Banner = ({ title, imageUrl }) => {
  return (
    <div className="relative flex items-center justify-center py-40 text-white">
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay Text */}
      <h1 className="text-3xl font-bold px-4 py-2 rounded z-10">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
