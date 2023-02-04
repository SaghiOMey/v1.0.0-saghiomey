/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "../saghimey.jpg";
import nightsky from "../nightsky.jpg";
import Card from "../Components/Card";
import Footer from "../Components/Footer";





export default function AudioEnglishInterviews(props) {
  const episodes = [...props.episodes].reverse().filter(p => p.ln === "en");
  const lastepisode = props.episode.slice(-5).reverse();
  return (
    <>
    <div className="relative">
      <img className="bg-cover" src={nightsky} alt="nightsky" />
      <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
        <span className="text-lg md:text-5xl font-sans font-bold">English Episodes</span>
      </div>
      <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
      {episodes.length > 0 ? 
      <span className="text-xs ml-4 md:ml-20 lg:ml-28 md:text-lg lg:text-2xl xl:ml-40 xl:text-4xl font-sans font-bold text-gray-200">Looking for more episodes? Check all of our episodes right here below!</span>
      : "" }
      <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <Card episodes = {episodes} />
            <Footer lastepisode = {lastepisode} />
      </div>
      </div>
    </div>
    </>
  );
}
  