/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import Desert from "../Desert.jpg";
import logo from "../saghimey.jpg";
import twitter from "../twitter.svg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import castbox from "../castbox.svg";
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'




const products = [
  {
    id: 1,
    name: "Saghi.O.Mey",
    href: "#",
    describtion: "In this episode, the program and the servant are introduced",
    date: "Mar 19, 2022",
    time: "06:42",
  },
  {
    id: 2,
    name: "From university to the work - Reza Dehghan",
    href: "#",
    describtion:
      "When the university is over and we want to enter the labor market, we address the problems that arise",
    date: "Jun 17, 2022",
    time: "1:03:03",
  },
  {
    id: 3,
    name: "Cryptocurrency - Nadia Mousavi",
    href: "#",
    describtion: "Things to know about this cryptocurrency and stock market",
    date: "Jun 22, 2022",
    time: "1:08:29",
  },
  {
    id: 4,
    name: "Organizational Psychology - Zakiyeh Hoseinpour",
    href: "#",
    describtion:
      "What is organizational psychology, how do they work and how popular is it in the community?",
    date: "Jun 27, 2022",
    time: "1:04:03",
  },
  {
    id: 5,
    name: "relationships between girls and boys - Roya",
    href: "#",
    describtion: "Talk to Roya about romantic relationships and leading topics",
    date: "Jun 29, 2022",
    time: "1:09:46",
  },
  {
    id: 6,
    name: "Generational differences - Saba Mostamand",
    href: "#",
    describtion:
      "Talk to Saba about the current generation and previous generations",
    date: "Jun 30, 2022",
    time: "1:03:57",
  },
  {
    id: 7,
    name: "Problems of women in society - Dr. Aylin Tarighi",
    href: "#",
    describtion:
      "A conversation about womens problems in society with Dr. Aylin Tarighi",
    date: "Jul 1, 2022",
    time: "1:11:09",
  },
  {
    id: 8,
    name: "Nostalgia - Meysam",
    href: "#",
    describtion: "Talking about nostalgia with Meysam",
    date: "Jul 3, 2022",
    time: "1:05:23",
  },
  {
    id: 9,
    name: "A conversation with Sarah about cinema",
    href: "#",
    describtion: "Discussion of cinema and Christopher Nolans films",
    date: "Jul 5, 2022",
    time: "56:21",
  },
  {
    id: 10,
    name: "Mind game - Nosheen",
    href: "#",
    describtion: "A conversation with Nosheen about the mind game",
    date: "Jul 7, 2022",
    time: "1:08:54",
  },
  {
    id: 11,
    name: "The fear - Rozhina Mahmoudi",
    href: "#",
    describtion: "Talk about fear and scary stories",
    date: "Jul 11, 2022",
    time: "54:43",
  },
  {
    id: 12,
    name: "Evolution - Sina & Hamed",
    href: "#",
    describtion: "Talking about evolution with Sina and Hamed",
    date: "Jul 13, 2022",
    time: "51:07:26",
  },
  {
    id: 13,
    name: "Evolved ethics - Sina & Hamde part2",
    href: "#",
    describtion: "Continue talking about evolution",
    date: "Jul 14, 2022",
    time: "1:03:31",
  },
  {
    id: 14,
    name: "Immigration - Sanaz Sobhani Perez",
    href: "#",
    describtion: "Immigration topic and conversation with sanaz",
    date: "Jul 21, 2022",
    time: "1:10:27",
  },
  {
    id: 15,
    name: "Destiny",
    href: "#",
    describtion: "In this section, I will examine my own history",
    date: "Jul 28, 2022",
    time: "54:47",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  return (
    <>
      <div className="relative">
        <img className="bg-cover" src={Desert} alt="Desert" />
        <div className="absolute flex justify-between left-32 top-80">
          <img className="h-1/4 w-1/4 rounded" src={logo} alt="logo" />
          <div className="flex flex-1 items-start justify-center bg-black">
            <div className="font-mono font-bold ml-6 text-lg text-gray-100">
              Join Host Milad as he talks to various guests each week where
              ”Everyone Has A Story” from the world.
              <br />
              <br />
              <button onClick={() => setOpen(true)} class="bg-white text-black w-3/12 h-16 ml-80 rounded-full hover:bg-yellow-500 hover:text-white">
                Subscribe to Podcast
              </button>
              <Transition.Root show={open} as={Fragment}>
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
                      <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-200">
                      Subscribe Through Your Favorite Platform
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        <div className="flex mt-4 ml-6 justify-between">
                  <a href="#">
                    <img src={youtube} className="h-12 w-12 rounded-full" />
                  </a>
                  <a href="#">
                    <img src={apple} className="h-12 w-12" />
                  </a>
                  <a href="#">
                    <img src={spotify} className="h-12 w-12" />
                  </a>
                  </div>
                        </p>
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
              <br />
              <br />
              <br />
              <p className="font-mono flex font-bold ml-56 text-lg text-gray-100">
                Follow US: &nbsp;
                <a
                  className="text-yellow-500 hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-8 hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-8 hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-8 hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  className="text-yellow-500 ml-8 hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </p>
              <p className="font-mono flex font-bold ml-80 mt-8 text-lg text-gray-100">
                Reviews: &nbsp;
                <a
                  className="text-yellow-500 mt-1 flex hover:text-white fill-current"
                  href="#"
                >
                  <svg
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    stroke-linejoin="round"
                    stroke-miterlimit="2"
                    width="18"
                    height="18"
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
                    width="18"
                    height="18"
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
                    width="18"
                    height="18"
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
                    width="18"
                    height="18"
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
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z"
                      fill-rule="nonzero"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="absolute top-40 right-96">
          <div className="font-mono font-bold text-4xl text-white">
            Podcast SaghiOMey{" "}
          </div>
          <br />
          <span className="font-mono font-bold pl-28 text-xl text-white">
            Hosted By
          </span>
          <br />
          <span className="font-mono font-bold pl-32 text-xl text-white">
            Milad
          </span>
        </div>
        <div className="absolute top-3/4 w-full min-h-max bg-black">
          <div>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="mt-6 grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                {products.map((product) => (
                  <div key={product.id} className="group relative">
                    <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                      <img
                        src={logo}
                        alt={product.imageAlt}
                        className="h-full w-full lg:mt-4 lg:ml-24 lg:h-1/2 lg:w-1/2 rounded"
                      />
                      <div className="mt-4 mb-8">
                        <div>
                          <h3 className="text-sm text-zinc-300">
                            <a href={product.href} className="flex ml-28">
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
                              &nbsp;{product.date}&nbsp;&nbsp;
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
                              &nbsp;{product.time}
                            </a>
                          </h3>
                          <p className="mt-8 ml-4 mr-1 font-semibold text-lg text-yellow-500">
                            {product.name}
                          </p>
                        </div>
                        <p className="text-sm mt-1 ml-4 mr-1 font-medium text-gray-500">
                          {product.describtion}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 ml-52">
                <button class="bg-yellow-500 text-white w-1/6 h-16 ml-80 rounded-full hover:bg-white hover:text-black">
                  Load More
                </button>
              </div>
              <div className="flex mt-36 justify-between">
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
        </div>
      </div>
    </>
  );
}
