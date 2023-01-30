/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import person from "../person.svg";
import calendar from "../calendar.svg";
import googlepodcast from "../googlepodcast.svg";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from "react-share";
import { useState } from 'react'
// import { NavLink } from "react-router-dom";
import castbox from "../castbox.svg"

export default function Reviews(props) {
  const persian = [...props.episodes].reverse().filter(p => p.ln === "pa");
  const [ep, setEp] = useState(persian.slice(0,9));
  // const [episodes, setEpisodes] = useState(persian.slice(0,9));
  const lastepisode = props.episodes.slice(-5).reverse();
    return (
      <>
      <div className="relative">
        <img className="bg-cover" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center -mt-64 w-full text-white">
          <span className="text-5xl font-sans font-bold">Reviews</span>
        </div>
        <div className="absolute top-2/4 mt-32 w-full min-h-max bg-black">
        {persian.length > 0 ?
        <span className="ml-40 text-4xl font-sans font-bold text-gray-200">Read reviews about our podcast below!</span>
        : ""}
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
              {ep.length > persian.length ?
                <> 
                {persian.slice(0,9).map((episode) => ( 
                  <div key={episode.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                    <span className="ml-4 font-medium text-sm text-gray-400">Apple Podcasts</span>
                    <span
                     className="ml-4 text-yellow-500 mt-4 flex fill-current"
                    >
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                    </span>
                      <div className="mt-4 mb-8">
                        <div>
                          <p className="mt-6 ml-4 mr-1 font-bold text-base text-white">
                            {episode.name}
                          </p>
                        </div>
                        <p className="text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {episode.describtion}
                        </p>
                      </div>
                      <div className="flex place-content-between">
                      <span className="flex ml-4 font-semibold text-base">
                        <img className="text-white" src={person} />
                        <span style={{color: "#5b5454"}}>name</span>
                      </span>
                      <span className="flex mr-4 font-semibold text-base">
                        <img className="text-white mr-1" src={calendar} />
                        <span style={{color: "#5b5454"}}>{episode.date}</span>
                      </span>
                      </div>
                      <div className="mt-8 mb-4 flex place-content-between">
                      <div className="flex ml-4 font-semibold text-base">
                <TwitterShareButton url={"/"}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                      </div>
                      <div className="flex mr-4 font-semibold text-base">
                      <FacebookShareButton url={"/"}>
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
                </>
                : 
                <>
                {ep.map((episode) => ( 
                  <div key={episode.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 lg:aspect-none lg:h-90">
                    <span className="ml-4 font-medium text-sm text-gray-400">Apple Podcasts</span>
                    <span
                     className="ml-4 text-yellow-500 mt-4 flex fill-current"
                    >
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>

                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                    </span>
                      <div className="mt-4 mb-8">
                        <div>
                          <p className="mt-6 ml-4 mr-1 font-bold text-base text-white">
                            {episode.name}
                          </p>
                        </div>
                        <p className="text-2xl mt-4 ml-4 mr-1 font-medium text-gray-200">
                          {episode.describtion}
                        </p>
                      </div>
                      <div className="flex place-content-between">
                      <span className="flex ml-4 font-semibold text-base">
                        <img className="text-white" src={person} />
                        <span style={{color: "#5b5454"}}>name</span>
                      </span>
                      <span className="flex mr-4 font-semibold text-base">
                        <img className="text-white mr-1" src={calendar} />
                        <span style={{color: "#5b5454"}}>{episode.date}</span>
                      </span>
                      </div>
                      <div className="mt-8 mb-4 flex place-content-between">
                      <div className="flex ml-4 font-semibold text-base">
                <TwitterShareButton url={"/"}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                      </div>
                      <div className="flex mr-4 font-semibold text-base">
                <FacebookShareButton url={"/"}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                      </div>
                      </div>
                    </div>
                  </div>
                ))}
                </>
                }
              </div>
              {persian.length > 0 ?
              <div className="mt-16 ml-52">
                <button onClick={() => setEp([...props.episodes].reverse().slice(0,ep.length + 9))} class="bg-yellow-500 text-white w-1/6 h-16 ml-80 rounded-full hover:bg-white hover:text-black">
                  Load More
                </button>
              </div>
              : <span className="flex text-gray-200 justify-center text-xl font-semibold">Your search returned no results, please try again</span>
              }      
              <div className="flex mt-36 justify-between">
                  <span className="text-gray-300 text-lg font-medium">Recent Episodes
                  <div className="mt-4 text-base font-normal">
                  <a href="#">
                  <ul className="list-disc">
                  {lastepisode.map((episode) => (
                    <li className="hover:text-white mt-2">{episode.name}</li>
                  ))}
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
      </div>
      </>
    );
  }