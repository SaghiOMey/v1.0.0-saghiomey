/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useLocation } from "react-router-dom";
import sky from "../sky.jpg";
import Footer from "../Components/Footer";

export default function Persian(props) {
  const { pathname } = useLocation();
  const episodes = [...props.episodes].reverse();
  const lastepisode = props.episodes.slice(-5).reverse();
  const result = episodes.find(
    (episode) => episode.href === pathname.replace("/VideoInterviews/", "")
  );

  return (
    <>
      <div className="relative">
        <img className="bg-cover grayscale h-96 md:h-auto xl:w-full" src={sky} alt="sky" />
        <div className="absolute grid justify-items-center md:justify-items-start xl:top-3/4 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 grayscale w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
          />
          <p className="-mt-56 xl:-mt-96 lg:-mt-96 md:-mt-72 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">
            {result.name}
          </p>
          <div className="justify-self-center -mt-48 w-72 md:-mt-64 md:ml-56 md:h-60 md:w-1/2 lg:-mt-80 lg:ml-80 lg:w-3/5 lg:h-72 xl:ml-96 aspect-video">
            <iframe
              className="w-full h-36 md:h-60 lg:h-72"
              src={result.video}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <span className="font-normal font-sans text-white lg:text-2xl">
              {result.describtion}.
            </span>
            <br />
            <br />
            <span className="font-normal font-sans text-white lg:text-2xl">
              Follow us on Social Media for the latest show updates
            </span>
            <br />
            <br />
            <a
              href="/"
              className="font-normal font-sans text-gray-500 lg:text-2xl"
            >
              Instagram
            </a>
            <br />
            <br />
            <a
              href="/"
              className="font-normal font-sans text-gray-500 lg:text-2xl"
            >
              Facebook
            </a>
            <br />
            <br />
            <a
              href="/"
              className="font-normal font-sans text-gray-500 lg:text-2xl"
            >
              SaghiOMey
            </a>
            <br />
            <br />
            <a
              href="/"
              className="font-normal font-sans text-gray-500 lg:text-2xl"
            >
              YouTube
            </a>
            <br />
            <br />
            <Footer lastepisode={lastepisode} />
          </div>
        </div>
      </div>
    </>
  );
}
