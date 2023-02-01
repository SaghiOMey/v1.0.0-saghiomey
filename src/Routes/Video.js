/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { useLocation } from "react-router-dom"
import sky from "../sky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
// import logo from "../saghimey.jpg";
import castbox from "../castbox.svg"



export default function Persian(props) {
    const { pathname } = useLocation();
    const episodes = [...props.episodes].reverse()
    const lastepisode = props.episodes.slice(-5).reverse();
    const result = episodes.find(episode => episode.href === pathname.replace('/VideoInterviews/',''));
    const mystyle = {
        width: "62rem",
        height: "27rem",
    };
    console.log(result);
  return (
    <>
      <div className="relative">

          <img className="bg-cover" src={sky} alt="sky" />
          <div className="absolute grid -mt-64 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="w-64 -mt-48 ml-20 rounded"
           />
           <p className="-mt-96 ml-56 justify-self-center text-4xl font-bold">{result.name}</p>
           <div className="flex justify-center ml-44">
           
           </div>
        <div className="flex -mt-64 justify-self-center ml-56 h-0 w-5/12">
        <span className="flex justify-center -mt-16 -ml-36"><iframe style={mystyle} width="560" height="315" src={result.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></span>
        </div>
          </div>
          <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <span className="font-normal font-sans text-white lg:text-2xl">{result.describtion}.</span><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Listen on</span><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Anchor-</span><a href={result.anchor} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.anchor}</a><br /><br />
                {/* <span className="font-normal font-sans text-white lg:text-2xl">Spotify-</span><a href={result.spotify} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.spotify}</a><br /><br /> */}
                <span className="font-normal font-sans text-white lg:text-2xl">ApplePodcast-</span><a href={result.apple} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.apple}</a><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">CastBox-</span><a href={result.castbox} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.castbox}</a><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Follow us on Social Media for the latest show updates</span><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Twitter</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Instagram</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Facebook</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">SaghiOMey</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">YouTube</a><br /><br />
                <div className="md:flex mt-36 md:justify-between">
                  <span className="text-gray-300 text-lg font-medium">Recent Episodes
                  <div className="mt-4 text-base font-normal">
                  <a href="#">
                  <ul className="md:list-disc">
                  {lastepisode.map((episode) => (
                    <li className="hover:text-white mt-2">{episode.name}</li>
                    ))}
                  </ul>
                  </a>
                  </div>
                  </span><br />
                  <span className="text-gray-300 text-lg font-medium">Pages
                  <div className="mt-4 text-base font-normal">
                  <a href="#">
                    <p className="hover:text-white mt-2">Home</p>
                    <p className="hover:text-white mt-2">Video Interviews</p>
                    <p className="hover:text-white mt-2">Audio English Interviews</p>
                    <p className="hover:text-white mt-2">Audio Persian Interviews</p>
                    <p className="hover:text-white mt-2">Reviews</p>
                    <p className="hover:text-white mt-2">About</p>
                  </a>
                  </div>
                  </span><br />
                  <span className="text-gray-300 text-lg font-medium">Follow Our Show
                  <div className="flex justify-center gap-3 mt-4">
                  <a href="#">
                    <img src={apple} className="h-8 w-8" />
                  </a>
                  <a href="#">
                    <img src={youtube} className="h-8 w-8" />
                  </a>
                  <a href="#">
                    <img src={spotify} className="h-8 w-8" />
                  </a>
                  </div>
                  <div className="flex justify-center mt-4 md:ml-6 gap-3">
                  <a href="#">
                    <img src={googlepodcast} className="h-8 w-8 rounded-full bg-white" />
                  </a>
                  <a href="#">
                    <img src={castbox} className="h-8 w-8" />
                  </a>
                  </div>
                  </span>
                </div>
          </div>
          </div>

        </div>
    </>
  );
}
