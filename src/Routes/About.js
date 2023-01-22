/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import castbox from "../castbox.svg"

export default function About() {
  return (
    <>
      <div className="relative">
        <img className="bg-cover" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center -mt-64 w-full text-white">
          <span className="text-5xl font-sans font-bold">About</span>
        </div>
        <div className="absolute top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="mb-56 mt-12 ml-20 leading-8 text-gray-200">
            <span className="text-4xl font-sans font-bold">About The Show</span><br /><br />
            <span className="text-4xl font-sans font-bold">INTERVIEWS with GUESTS FROM THE WORLD</span><br /><br />
            <span className="text-4xl font-sans font-bold">Host</span><br /><br /><br />
            <span className="text-2xl text-gray-400 font-sans font-bold">Join Host Milad as he talks to various guests each week where ”Everyone Has A Story” from the world.</span>
          </div>
        <div className="flex ml-20 mr-20 justify-between">
                  <span className="text-gray-300 text-lg font-medium">Recent Episodes
                  <div className="mt-4 text-base font-normal">
                  <a href="#">
                  <ul className="list-disc">
                    <li className="hover:text-white">Medicine embargo - Shirin Zarafshan</li>
                    <li className="hover:text-white mt-2">A total of British artists - Shahrzad Akbari</li>
                    <li className="hover:text-white mt-2">Science - Maryam Jafari </li>
                    <li className="hover:text-white mt-2">From silence to sound - Peyvand Azad</li>
                    <li className="hover:text-white mt-2">Flexibility in the workplace - Sara Sadeghian</li>
                  </ul>
                  </a>
                  </div>
                  </span>
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
                  </span>
                  <span className="text-gray-300 text-lg font-medium">Follow Our Show
                  <div className="flex gap-3 mt-4">
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
                  <div className="flex mt-4 ml-6 gap-3">
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
    </>
  );
}
