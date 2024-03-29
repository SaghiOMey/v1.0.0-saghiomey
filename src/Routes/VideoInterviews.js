/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import Footer from "../Components/Footer";
import Card from "../Components/Card";

export default function VideoInterviews(props) {
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episode.slice(-5).reverse();
  return (
    <>
      <div className="relative">
        <img className="bg-cover grayscale xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">
            Video Interviews
          </span>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <Card episodes={episodes} />
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
    </>
  );
}
