/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import { Fragment, useCallback } from "react";
import logo from "../saghiomey.ico";
import profile from "../profile.jpg";
// eslint-disable-next-line no-unused-vars
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { NavLink, useLocation } from "react-router-dom";
import About from "../Routes/About";
import Home from "../Routes/Home";
import Episode from "../Routes/Episode";
import Persian from "../Routes/Persian";
import Video from "../Routes/Video";
import English from "../Routes/English";
import VideoInterviews from "../Routes/VideoInterviews";
import { useRef, useState } from "react";
import { Dialog } from "@headlessui/react";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import castbox from "../castbox.svg";
import AudioEnglishInterviews from "../Routes/AudioEnglishInterviews";
import AudioPersianInterviews from "../Routes/AudioPersianInterviews";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Profile from "../Routes/Profile";
import Reviews from "../Routes/Reviews";
import NFT from "../Routes/NFT";
import Contact from "../Routes/Contact";
import Voice from "./voice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header(props) {
  const form1 = useRef();

  const { pathname } = useLocation();
  const [Open, setOpen] = useState(false);
  const [Search, setSearch] = useState(false);
  const [audio, setAudio] = useState("");
  let [Name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const filterNames = props.episodes.filter((episodes) =>
    episodes.name.toLowerCase().includes(Name.toLowerCase())
  );
  const filterReviews = props.reviews.filter((reviews) =>
    reviews.epname.toLowerCase().includes(Name.toLowerCase())
  );
  const cancelButtonRef = useRef(null);

  let navigation = [
    { name: "Home", href: "/", current: false },
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

  function current() {
    let result = navigation.find((item) =>
      item.href === pathname
        ? item.href
        : item.href === pathname.replace("/", "")
    );
    if (result) {
      result.current = true;
    } else {
      result = pathname;
    }
    return (navigation = navigation.map((nav) =>
      nav.href === result.href ? result : nav
    ));
  }


  return (
    <div>
      <Disclosure as="nav" style={{ backgroundColor: "#1f2022" }}>
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-32 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block grayscale h-16 mb-20 w-auto lg:hidden"
                      src={logo}
                      alt="SaghiOMey"
                    />
                    <img
                      className="hidden grayscale h-16 w-auto lg:block"
                      src={logo}
                      alt="SaghiOMey"
                    />
                  </div>
                  <div className="hidden pt-4 sm:ml-6 sm:block">
                    <div>
                      {navigation.map((item) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          className={({ isActive }) =>
                            isActive
                              ? "bg-gray-900 text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                              : "text-gray-300 hover:bg-gray-700 hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                      <button
                        onClick={() => setOpen(true)}
                        className="text-gray-300 hover:bg-gray-700 pointer hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                      >
                        Subscribe
                      </button>
                      <Transition.Root show={Open} as={Fragment}>
                        <Dialog
                          as="div"
                          className="relative z-10"
                          initialFocus={cancelButtonRef}
                          onClose={setOpen}
                        >
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
                                        <Dialog.Title
                                          as="h3"
                                          className="text-xl font-semibold leading-6 text-gray-200"
                                        >
                                          Subscribe Through Your Favorite
                                          Platform
                                        </Dialog.Title>
                                        <div className="mt-2">
                                          <p className="text-sm text-gray-500">
                                            <div className="flex mt-4 ml-6 justify-between">
                                                <img
                                                  src={youtube}
                                                  className="h-12 grayscale w-12 rounded-full"
                                                />
                                                <img
                                                  src={spotify}
                                                  className="h-12 grayscale w-12"
                                                />
                                                <img
                                                  src={googlepodcast}
                                                  className="h-12 grayscale w-12"
                                                />
                                                <img
                                                  src={castbox}
                                                  className="h-12 grayscale w-12"
                                                />
                                            </div>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="bg-black px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                      type="button"
                                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pt-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    disabled
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  {Search ? (
                    <input
                      type="search"
                      onChange={handleChange}
                      value={Name}
                      class="form-control relative flex-auto min-w-0 block w-32 px-3 py-1.5 text-base font-normal bg-inherit text-gray-200 bg-clip-padding border-b border-solid border-b-gray-500 transition ease-in-out m-0 focus:text-gray-200 focus:border-b-yellow-600	 focus:outline-none"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                  ) : null}
                  <button
                    onClick={() => setSearch(!Search)}
                    type="button"
                    className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">View notifications</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="w-4"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      ></path>
                    </svg>
                  </button>
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-16 grayscale w-16 rounded-full"
                          src={profile}
                          alt="profile"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <NavLink
                              to="Profile"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-300"
                              )}
                            >
                              Profile
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <NavLink
                              to="NFT"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-300"
                              )}
                            >
                              NFT
                            </NavLink>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <NavLink
                              to="Reviews"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700 hover:text-gray-300"
                              )}
                            >
                              Reviews
                            </NavLink>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as={NavLink}
                    to={item.href}
                    onClick={current()}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-gray-500"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
                <button
                  onClick={() => setOpen(true)}
                  className="text-gray-300 hover:bg-gray-700 pointer hover:text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Subscribe
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Routes>
        <Route path="Profile" element={<Profile episode={props.episodes} />} />
        <Route
          path="Reviews"
          element={<Reviews reviews={filterReviews} episode={props.episodes} />}
        />
        <Route
          path="NFT"
          element={<NFT reviews={filterReviews} episode={props.episodes} />}
        />
        <Route path="About" element={<About episodes={props.episodes} />} />
        <Route path="Contact" element={<Contact episodes={props.episodes} />} />
        <Route
          path="/*"
          element={<Home episodes={filterNames} episode={props.episodes} />}
        />
        <Route path=":href" element={<Episode episodes={props.episodes} />} />
        <Route
          path="PersianEpisodes/:href"
          element={<Persian episodes={props.episodes} />}
        />
        <Route
          path="EnglishEpisodes/:href"
          element={<English episodes={props.episodes} />}
        />
        <Route
          path="VideoInterviews/:href"
          element={<Video episodes={props.episodes} />}
        />
        <Route
          path="VideoInterviews/*"
          element={
            <VideoInterviews episodes={filterNames} episode={props.episodes} />
          }
        />
        <Route
          path="EnglishEpisodes/*"
          element={
            <AudioEnglishInterviews
              episodes={props.episodes}
              episode={props.episodes}
            />
          }
        />
        <Route
          path="PersianEpisodes/*"
          element={
            <AudioPersianInterviews
              episodes={filterNames}
              episode={props.episodes}
            />
          }
        />
      </Routes>
      <Voice />
    </div>
  );
}
