/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Fragment, useState, useRef } from "react";
import { useLocation } from "react-router-dom"
import { Dialog } from '@headlessui/react'
import { Transition } from "@headlessui/react";
import sky from "../sky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import share from "../share.svg";
import copy from "../copy.svg";
import done from "../done.svg";
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  RedditShareButton,
  RedditIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";
// import logo from "../saghimey.jpg";
import castbox from "../castbox.svg"
import browse from "../browsePodcast.svg";
import AudioPlayer from 'react-modern-audio-player';

export default function Persian(props) {
    const [Open, setOpen] = useState(false)
    const [isCopied, setIsCopied] = useState();
    const cancelButtonRef = useRef(null)
    const { pathname } = useLocation();
    const episodes = [...props.episodes].reverse()
    const lastepisode = props.episodes.slice(-5).reverse();
    const result = episodes.find(episode => episode.href === pathname.replace('/EnglishEpisodes/',''));
    console.log(result);
    const playList = [
      {
        src: result.voice,
        id: 1,
      },
    ]
    console.log(result);
  return (
    <>
      <div className="relative">
      <div className="relative">
          <img className="bg-cover" src={sky} alt="sky" />
          <div className="absolute grid -mt-64 w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="w-1/4 -mt-64 ml-20 rounded"
           />
           <p className="-mt-80 ml-56 justify-self-center text-4xl font-bold">{result.name}</p>
           <div className="flex justify-center ml-44">
           <img src={browse} className="-mt-96 mr-0.5 h-4 w-4 rounded-full text-white" /><br />
           <span className="-mt-96 mr-96  text-xs">Podcast SaghiOMey</span>&nbsp;&nbsp;
           <a className="text-zinc-100 fill-current -mt-96 -ml-96">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
            >
            <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
            </svg>
            </a>&nbsp;
            <span className="-mt-96 mr-80  text-xs">{result.date}</span>&nbsp;&nbsp;
            <a className="text-zinc-100 fill-current -mt-96 -ml-80">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="13"
               height="13"
               viewBox="0 0 24 24"
               >
               <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
               </svg>
               </a>&nbsp;
            <span className="-mt-96 mr-80  text-xs">{result.time}</span>
           </div>
        <div className="flex -mt-64 justify-self-center ml-56 h-0 w-5/12">
        <AudioPlayer
        playList={playList}
        audioInitialState={{
          muted: false,
          volume: 0.6,
          curPlayId: 1,
        }}
        placement={{
          interface: {
            templateArea: {
              trackTimeDuration: "row1-5",
              progress: "row1-4",
            },
          },
        }}
        activeUI={{
          all: true,
          playList: false,
          repeatType: false,
          prevNnext: false,
          progress: "sortable",
        }}
      />
      <button onClick={() => setOpen(true)}>
        <img src={share} className="mt-1 ml-4 h-10 w-10" />
      </button>
      <Transition.Root show={Open} as={Fragment}>
                   <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-black text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-black px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg flex font-semibold leading-6 text-gray-200">
                        <img src={result.img} alt="logo" className="w-1/4 rounded" />
                      <span className="ml-4">{result.name}</span>
                      </Dialog.Title>
                      <div className="flex justify-between mt-8">
                      <TwitterShareButton url={pathname}>
                      <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                      <FacebookShareButton url={pathname}n>
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>
                      <LinkedinShareButton url={pathname}n>
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                      <PinterestShareButton url={pathname}n>
                        <PinterestIcon size={40} round={true} />
                      </PinterestShareButton>
                      </div>
                      <div className="flex justify-between mt-8">
                      <WhatsappShareButton url={pathname}n>
                        <WhatsappIcon size={40} round={true} />
                      </WhatsappShareButton>
                      <TelegramShareButton url={pathname}n>
                        <TelegramIcon size={40} round={true} />
                      </TelegramShareButton>
                      <RedditShareButton url={pathname}n>
                        <RedditIcon size={40} round={true} />
                      </RedditShareButton>
                      <EmailShareButton url={pathname}n>
                        <EmailIcon size={40} round={true} />
                      </EmailShareButton>
                      </div>
                      <div className="flex mt-8 items-center">                     
                        <div class="relative w-full">
                          <input value={pathname} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                        </div>
                        <button onClick={() => setIsCopied(navigator.clipboard.writeText(pathname))} type="submit" class="p-2.5 ml-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {isCopied ? 
                        <img src={done} />
                        :
                        <img src={copy} />
                        }
                        </button>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
                   </Dialog>
      </Transition.Root>
        </div>
        <span className="flex justify-self-center -mt-44 -ml-80 text-gray-300 font-semibold">Hosted By</span><br />
        <span className="flex justify-self-center -mt-40 -ml-80 font-medium h-8">Milad</span>
        <div className="flex justify-self-center gap-3 -mt-32 ml-12">
          <a href="#" className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0">
           <img src={youtube} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-base mt-3 hover:text-white">YouTube</span>
          </a>
          <a href="#" className="flex bg-white h-12 w-44 rounded hover:bg-opacity-0">
           <img src={apple} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-base mt-3 hover:text-white">Apple Podcasts</span>
          </a>
          <a href="#" className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0">
           <img src={spotify} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-base mt-3 hover:text-white">Spotify</span>
          </a>
        </div>
          </div>
          <div className="absolute top-2/4 mt-60 w-full min-h-max bg-black">
          <div className="mx-auto max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <span className="font-normal font-sans text-white text-2xl">{result.describtion}.</span><br /><br />
                <span className="font-normal font-sans text-white text-2xl">Listen on</span><br /><br />
                <span className="font-normal font-sans text-white text-2xl">Anchor-</span>&nbsp;<a href={result.anchor} className="font-normal font-sans text-yellow-500 text-2xl">{result.anchor}</a><br /><br />
                <span className="font-normal font-sans text-white text-2xl">Spotify-</span>&nbsp;<a href={result.spotify} className="font-normal font-sans text-yellow-500 text-2xl">{result.spotify}</a><br /><br />
                <span className="font-normal font-sans text-white text-2xl">ApplePodcast-</span>&nbsp;<a href={result.apple} className="font-normal font-sans text-yellow-500 text-2xl">{result.apple}</a><br /><br />
                <span className="font-normal font-sans text-white text-2xl">CastBox-</span>&nbsp;<a href={result.castbox} className="font-normal font-sans text-yellow-500 text-2xl">{result.castbox}</a><br /><br />
                <span className="font-normal font-sans text-white text-2xl">You can watch this interview on YouTube</span>&nbsp;<a href={result.youtube} className="font-normal font-sans text-yellow-500 text-2xl">{result.youtube}</a><br /><br />
                <span className="font-normal font-sans text-white text-2xl">Follow us on Social Media for the latest show updates</span><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Twitter</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Instagram</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">Facebook</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">SaghiOMey</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 text-2xl">YouTube</a><br /><br />
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
        </div>
    </>
  );
}
