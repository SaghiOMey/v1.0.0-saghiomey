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
import { Helmet } from 'react-helmet';
// import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
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
import browse from "../browsePodcast.svg";
import AudioPlayer from 'react-modern-audio-player';
import Footer from "../Components/Footer";

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
    
  return (
    <>
        <Helmet>
          <title>{result.describtion}</title>
          <meta property="og:title" key="og:title" content={result.name}/>
          <meta property="og:description" key="og:description" content={result.describtion} />
          <meta property="og:image" key="og:image" content={result.img} />
        </Helmet>
      <div className="relative">
          <img className="bg-cover h-96 md:h-auto" src={sky} alt="sky" />
          <div className="absolute grid justify-items-center md:justify-items-start w-full text-white">
          <img
            src={result.img}
            alt="logo"
            className="-mt-96 w-40 md:w-1/4 xl:-mt-96 lg:-mt-80 md:-mt-64 md:ml-20 rounded"
           />

           <div className="flex -mt-52 xl:-mt-96 lg:-mt-80 md:-mt-64 xl:-ml-36 lg:ml-16 md:ml-36 justify-self-center">
           <img src={browse} className="h-4 w-4 rounded-full text-white" /><br />
           <span className="text-xs">Podcast SaghiOMey</span>&nbsp;&nbsp;
           <a className="text-zinc-100 fill-current">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
            >
            <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
            </svg>
            </a>&nbsp;
            <span className="text-xs">{result.date}</span>&nbsp;&nbsp;
            <a className="text-zinc-100 fill-current">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="13"
               height="13"
               viewBox="0 0 24 24"
               >
               <path d="M13 12l-.688-4h-.609l-.703 4c-.596.347-1 .984-1 1.723 0 1.104.896 2 2 2s2-.896 2-2c0-.739-.404-1.376-1-1.723zm-1-8c-5.522 0-10 4.477-10 10s4.478 10 10 10 10-4.477 10-10-4.478-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm-2-19.819v-2.181h4v2.181c-1.438-.243-2.592-.238-4 0zm9.179 2.226l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.926-1.5-1.328z" />
               </svg>
               </a>&nbsp;
            <span className="text-xs">{result.time}</span>
           </div>
           <p className="-mt-48 xl:-mt-80 lg:-mt-72 md:-mt-60 xl:ml-56 lg:ml-56 md:ml-56 justify-self-center xl:text-4xl lg:text-2xl md:text-xl font-bold">{result.name}</p>
           
        <div className="flex -mt-40 xl:-mt-64 lg:-mt-58 md:-mt-52 justify-self-center md:ml-56 h-0 w-9/12 md:w-5/12">
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
                      <TwitterShareButton url={result.eplink}>
                      <TwitterIcon size={40} round={true} />
                      </TwitterShareButton>
                      <FacebookShareButton url={result.eplink}>
                        <FacebookIcon size={40} round={true} />
                      </FacebookShareButton>
                      <LinkedinShareButton url={result.eplink}>
                        <LinkedinIcon size={40} round={true} />
                      </LinkedinShareButton>
                      <PinterestShareButton url={result.eplink}>
                        <PinterestIcon size={40} round={true} />
                      </PinterestShareButton>
                      </div>
                      <div className="flex justify-between mt-8">
                      <WhatsappShareButton url={result.eplink}>
                        <WhatsappIcon size={40} round={true} />
                      </WhatsappShareButton>
                      <TelegramShareButton url={result.eplink}>
                        <TelegramIcon size={40} round={true} />
                      </TelegramShareButton>
                      <RedditShareButton url={result.eplink}>
                        <RedditIcon size={40} round={true} />
                      </RedditShareButton>
                      <EmailShareButton url={result.eplink}>
                        <EmailIcon size={40} round={true} />
                      </EmailShareButton>
                      </div>
                      <div className="flex mt-8 items-center">                     
                        <div class="relative w-full">
                          <input value={result.eplink} type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" disabled />
                        </div>
                        <button onClick={() => setIsCopied(navigator.clipboard.writeText(result.eplink))} type="submit" class="p-2.5 ml-2 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
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
        <span className="flex justify-self-center -mt-28 xl:-mt-44 xl:-ml-80 lg:-mt-44 lg:-ml-32 md:-mt-36 md:-ml-12 text-gray-300 font-semibold">Hosted By</span><br />
        <span className="flex justify-self-center -mt-28 xl:-mt-40 xl:-ml-80 lg:-mt-44 lg:-ml-32 md:-mt-36 md:-ml-12 font-medium h-8">Milad</span>
        <div className="flex md:justify-self-center w-80 md:w-auto gap-0.5 md:gap-3 -mt-20 xl:-mt-32 xl:ml-12 lg:-mt-36 lg:ml-64 md:-mt-28 md:ml-72">
          <a href="#" className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0">
           <img src={youtube} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">YouTube</span>
          </a>
          {/* <a href="#" className="flex bg-white h-12 w-44 rounded hover:bg-opacity-0">
           <img src={apple} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">Apple Podcasts</span>
          </a> */}
          <a href="#" className="flex bg-white h-12 w-32 rounded hover:bg-opacity-0">
           <img src={spotify} className="h-8 w-8 mt-2 ml-2" />&nbsp;&nbsp;
           <span className="text-black font-bold text-xs md:text-base mt-3 hover:text-white">Spotify</span>
          </a>
        </div>
          </div>
          <div className="absolute mt-auto xl:mt-32 lg:mt-24 md:mt-24 md:top-2/3 lg:top-3/4 w-full min-h-max bg-black">
          <div className="mx-auto text-center md:text-justify max-w-2xl py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <span className="font-normal font-sans text-white lg:text-2xl">{result.describtion}.</span><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Listen on</span><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Anchor-</span><a href={result.anchor} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.anchor}</a><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">CastBox-</span><a href={result.castbox} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.castbox}</a><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">You can watch this interview on YouTube</span><a href={result.youtube} className="font-normal font-sans text-yellow-500 lg:text-2xl">{result.youtube}</a><br /><br />
                <span className="font-normal font-sans text-white lg:text-2xl">Follow us on Social Media for the latest show updates</span><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Twitter</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Instagram</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">Facebook</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">SaghiOMey</a><br /><br />
                <a href="#" className="font-normal font-sans text-yellow-500 lg:text-2xl">YouTube</a><br /><br />
                <Footer lastepisode = {lastepisode} />
          </div>
          </div>
        </div>
        
    </>
  );
}
