/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Desert from "../Desert.jpg";
import profile1 from "../profile1.jpg";
import Footer from "../Components/Footer";

export default function Profile(props) {
  const lastepisode = props.episode.slice(-5).reverse();

  return (
    <>
      <div className="relative">
        <img className="bg-cover grayscale xl:w-full" src={Desert} alt="Desert" />
        <div className="absolute md:flex md:justify-between top-4 left-12 xl:top-80 lg:top-60 md:top-44">
          <img
            className="h-40 md:h-2/6 md:w-2/6 rounded"
            src={profile1}
            alt="profile1"
          />
          <div className="mt-16 -ml-20 h-72 lg:h-auto md:h-44 md:m-0 md:flex md:flex-1 md:items-start md:justify-center bg-black">
            <div className="font-mono font-bold ml-8 text-xs md:text-xs lg:text-3xl text-gray-100">
              .سلام دوستان من میلاد هستم و به برنامه ساقی و می خوش اومدید | Hi
              my friends, I am Milad and welcome to Saghi.O.Mey, <br /> The
              program I talking to my dear guests.
              <br /> A program that has a lot of interesting and unspoken words
              to share with you dear ones,
              <br /> And if you like this program, You can share it with your
              friends or anyone else. <br />
              Thank you to all the friends who are kind enough to support me to
              this program.
            </div>
          </div>
        </div>
        <div className="absolute top-44 left-20 lg:top-40 md:top-12 md:left-1/2">
          <div className="font-mono font-bold text-xs md:text-4xl text-white">
            Profile Milad{" "}
          </div>
        </div>
        <div className="absolute mt-48 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div>
            <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <span className="font-normal font-sans text-white text-2xl">
                Follow us on Social Media for the latest show updates
              </span>
              <br />
              <br />
              <a
                href="/"
                className="font-normal font-sans text-gray-500 text-2xl"
              >
                Instagram
              </a>
              <br />
              <br />
              <a
                href="/"
                className="font-normal font-sans text-gray-500 text-2xl"
              >
                Facebook
              </a>
              <br />
              <br />
              <a
                href="/"
                className="font-normal font-sans text-gray-500 text-2xl"
              >
                SaghiOMey
              </a>
              <br />
              <br />
              <a
                href="/"
                className="font-normal font-sans text-gray-500 text-2xl"
              >
                YouTube
              </a>
              <br />
              <br />
              <Footer lastepisode={lastepisode} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
