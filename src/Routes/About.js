/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import Footer from "../Components/Footer";

export default function About(props) {
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
      <div className="relative">
        <img className="bg-cover grayscale xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">About</span>
        </div>
        <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="lg:mb-56 mt-12 lg:ml-20 leading-8 text-gray-200">
            <span className="text-2xl md:text-4xl font-sans font-bold">
              About The Show
            </span>
            <br />
            <br />
            <span className="text-2xl md:text-4xl font-sans font-bold">
              INTERVIEWS with GUESTS FROM THE WORLD
            </span>
            <br />
            <br />
            <span className="text-2xl md:text-4xl font-sans font-bold">
              Host
            </span>
            <br />
            <br />
            <br />
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">
              Join Host Milad as he talks to various guests each week where
              ”Everyone Has A Story” from the world.
            </span>
          </div>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}
