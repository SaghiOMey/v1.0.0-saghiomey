/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import { NavLink, useLocation } from "react-router-dom";
import castbox from "../castbox.svg";

export default function Footer(lastepisode) {
  const { pathname } = useLocation();
  const navigation = [
    { name: "Home", href: "", current: false },
    { name: "Video Interviews", href: "VideoInterviews", current: false },
    {
      name: "Audio English Interviews",
      href: "EnglishEpisodes",
      current: false,
    },
    {
      name: "Audio Persian Interviews",
      href: "PersianEpisodes",
      current: false,
    },
    { name: "About", href: "About", current: false },
    { name: "Contact", href: "Contact", current: false },
  ];
 
  return (
    <>
      {pathname === "/About" || pathname === "/Contact" ? (
        <div className="md:flex mt-36 md:justify-between mx-auto text-center max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <span className="text-gray-300 text-lg font-medium">
            Recent Episodes
            <div className="mt-4 text-base font-normal">
              <ul className="md:list-disc">
                {lastepisode.lastepisode.map((episode) => (
                  <li className="hover:text-white mt-2">
                    <NavLink to={`/${episode.href}`}>{episode.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Pages
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
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Follow Our Show
            <div className="flex justify-center gap-3 mt-4">
              {/* <a href="#">
                    <img src={apple} className="h-8 w-8" />
                  </a> */}
              <a href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ">
                <img src={youtube} className="h-8 w-8" />
              </a>
              <a href="https://open.spotify.com/show/6ObUzf2m0OtJNyVvNvwIVp">
                <img src={spotify} className="h-8 w-8" />
              </a>
            </div>
            <div className="flex justify-center mt-4 md:ml-6 gap-3">
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ODJiZGVmNC9wb2RjYXN0L3Jzcw?ep=14">
                <img
                  src={googlepodcast}
                  className="h-8 w-8 rounded-full bg-white"
                />
              </a>
              <a href="https://castbox.fm/channel/id4931691?country=gb">
                <img src={castbox} className="h-8 w-8" />
              </a>
            </div>
          </span>
        </div>
      ) : (
        <div className="md:flex mt-36 md:justify-between">
          <span className="text-gray-300 text-lg font-medium">
            Recent Episodes
            <div className="mt-4 text-base font-normal">
              <ul className="md:list-disc">
                {lastepisode.lastepisode.map((episode) => (
                  <li className="hover:text-white mt-2">
                    <NavLink to={`/${episode.href}`}>{episode.name}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Pages
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
          </span>
          <br />
          <span className="text-gray-300 text-lg font-medium">
            Follow Our Show
            <div className="flex justify-center gap-3 mt-4">
              {/* <a href="#">
                    <img src={apple} className="h-8 w-8" />
                  </a> */}
              <a href="https://www.youtube.com/channel/UCCsIc3DO4eWMO2TlyRxxQSQ">
                <img src={youtube} className="h-8 w-8" />
              </a>
              <a href="https://open.spotify.com/show/6ObUzf2m0OtJNyVvNvwIVp">
                <img src={spotify} className="h-8 w-8" />
              </a>
            </div>
            <div className="flex justify-center mt-4 md:ml-6 gap-3">
              <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ODJiZGVmNC9wb2RjYXN0L3Jzcw?ep=14">
                <img
                  src={googlepodcast}
                  className="h-8 w-8 rounded-full bg-white"
                />
              </a>
              <a href="https://castbox.fm/channel/id4931691?country=gb">
                <img src={castbox} className="h-8 w-8" />
              </a>
            </div>
          </span>
        </div>
      )}
    </>
  );
}
