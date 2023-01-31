/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import logo from "../saghimey.jpg";
import nightsky from "../nightsky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import { useState } from 'react'
import { NavLink } from "react-router-dom";
import castbox from "../castbox.svg"





export default function VideoInterviews(props) {
  const episodes = [...props.episodes].reverse()
  const [ep, setEp] = useState(episodes.slice(0,9));
  const lastepisode = props.episodes.slice(-5).reverse();
  return (
    <>
    <div className="relative">
      <img className="bg-cover" src={nightsky} alt="nightsky" />
      <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
        <span className="text-lg md:text-5xl font-sans font-bold">Video Interviews</span>
      </div>
      <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
      <div className="mx-auto text-center max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
            {ep.length > episodes.length ?
                <> 
                {episodes.slice(0,9).map((episode) => ( 
                  <NavLink to={`${episode.href}`}>
                  <div key={episode.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full lg:mt-4 lg:ml-24 lg:h-1/2 lg:w-1/2 rounded"
                      />
                      <div className="mt-4 mb-8">
                        <div>
                          <h3 className="text-sm text-zinc-300">
                            <a href={episode.href} className="flex ml-28">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              <a className="text-zinc-300 fill-current">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                                </svg>
                              </a>
                              &nbsp;{episode.date}&nbsp;&nbsp;
                              <a className="text-zinc-300 fill-current">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                                </svg>
                              </a>
                              &nbsp;{episode.time}
                            </a>
                          </h3>
                          <p className="mt-8 ml-4 mr-1 font-semibold text-lg text-yellow-500">
                            {episode.name}
                          </p>
                        </div>
                        <p className="text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                          {episode.describtion}
                        </p>
                      </div>
                    </div>
                  </div>
                  </NavLink>
                ))}
                </>
                : 
                <>
                {ep.map((episode) => ( 
                  <NavLink to={`${episode.href}`}>
                  <div key={episode.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={episode.img}
                        alt={episode.imageAlt}
                        className="h-full w-full lg:mt-4 lg:ml-24 lg:h-1/2 lg:w-1/2 rounded"
                      />
                      <div className="mt-4 mb-8">
                        <div>
                          <h3 className="text-sm text-zinc-300">
                            <a href={episode.href} className="flex ml-28">
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              <a className="text-zinc-300 fill-current">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="17"
                                  height="17"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
                                </svg>
                              </a>
                              &nbsp;{episode.date}&nbsp;&nbsp;
                              <a className="text-zinc-300 fill-current">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
                                </svg>
                              </a>
                              &nbsp;{episode.time}
                            </a>
                          </h3>
                          <p className="mt-8 ml-4 mr-1 font-semibold text-lg text-yellow-500">
                            {episode.name}
                          </p>
                        </div>
                        <p className="text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                          {episode.describtion}
                        </p>
                      </div>
                    </div>
                  </div>
                  </NavLink>
                ))}
                </>
                }
            </div>
            {episodes.length > 0 ?
            <div className="mt-16 md:mr-80">
              <button onClick={() => setEp([...props.episodes].reverse().slice(0,ep.length + 9))} class="bg-yellow-500 text-white h-12 w-28 lg:w-1/6 lg:h-16 lg:ml-80 md:ml-60 rounded-full hover:bg-white hover:text-black">
                Load More
              </button>
            </div>
            : <span className="flex text-gray-200 justify-center text-xl font-semibold">Your search returned no results, please try again</span>
             }
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