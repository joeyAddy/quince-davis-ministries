import Video from "next-video";
import getStarted from "@/videos/get-started.mp4";

const VideosSlider = () => {
  return (
    <div className="py-10 lg:py-20 px-6 md:px-12 lg:px-48 grid lg:grid-cols-2 gap-6 lg:gap-10">
      <div className="p-4 bg-black rounded-3xl shadow-2xl">
        <Video src={getStarted} />
      </div>
      <div className="p-4 bg-black rounded-3xl shadow-2xl">
        <Video src={getStarted} />
      </div>
    </div>
  );
};

export default VideosSlider;
