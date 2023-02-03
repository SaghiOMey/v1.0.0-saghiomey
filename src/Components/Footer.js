/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import { NavLink } from "react-router-dom";
import castbox from "../castbox.svg";



export default function Footer(lastepisode) {
  const navigation = [
    { name: "Home", href: "", current: false },
    { name: "Video Interviews", href: "VideoInterviews", current: false },
    { name: "Audio English Interviews", href: "EnglishEpisodes", current: false },
    { name: "Audio Persian Interviews", href: "PersianEpisodes", current: false },
    { name: "About", href: "About", current: false },
  ];
  return (
    <>
      <div className="md:flex mt-36 md:justify-between">
                  <span className="text-gray-300 text-lg font-medium">Recent Episodes
                  <div className="mt-4 text-base font-normal">
                  <ul className="md:list-disc">
                  {lastepisode.lastepisode.map((episode) => (
                    <li className="hover:text-white mt-2"><NavLink to={`/${episode.href}`}>{episode.name}</NavLink></li>
                    ))}
                  </ul>
                  </div>
                  </span><br />
                  <span className="text-gray-300 text-lg font-medium">Pages
                  <div className="mt-4 text-base font-normal">
                  <ul>
                  {navigation.map((item) => (
                    <li className="hover:text-white mt-2">
                      <NavLink
                        to={`/${item.href}`}
                        key={item.name}
                        className="hover:text-white mt-2"
                      >
                        {item.name}
                      </NavLink>
                      </li>
                    ))}
                    </ul>
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
    </>
  );
}



