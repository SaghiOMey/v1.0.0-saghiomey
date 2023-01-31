/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Desert from "../Desert.jpg";
import profile1 from "../profile1.jpg";
import twitter from "../twitter.svg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import castbox from "../castbox.svg";


export default function Profile(props) {
    const lastepisode = props.episode.slice(-5).reverse();

  return (
    <>
      <div className="relative">
        <img className="bg-cover" src={Desert} alt="Desert" />
        <div className="absolute md:flex md:justify-between top-4 left-12 xl:top-80 lg:top-60 md:top-44">
          <img className="h-40 md:h-2/6 md:w-2/6 rounded" src={profile1} alt="profile1" />
          <div className="mt-16 -ml-20 h-72 lg:h-auto md:h-44 md:m-0 md:flex md:flex-1 md:items-start md:justify-center bg-black">
            <div className="font-mono font-bold ml-8 text-xs md:text-xs lg:text-3xl text-gray-100">
            .سلام دوستان من میلاد هستم و به برنامه ساقی و می خوش اومدید | Hi my friends, I am Milad and welcome to Saghi.O.Mey, <br /> The program I talking to my dear guests.
            <br /> A program that has a lot of interesting and unspoken words to share with you dear ones,<br /> And if you like this program, You can share it with your friends or anyone else. <br />
            Thank you to all the friends who are kind enough to support me to this program.
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
            <span className="font-normal font-sans text-white text-2xl">Follow us on Social Media for the latest show updates</span><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Twitter</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Instagram</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Facebook</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">SaghiOMey</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">YouTube</a><br /><br />
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
      </div>
    </>
  );
}
