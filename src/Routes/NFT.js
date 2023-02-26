/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import logo from "../saghimey.jpg";
import Footer from "../Components/Footer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NFT(props) {
  let [categories] = useState({
    Image: [
      {
        id: 1,
        name: "Does drinking coffee make you smarter?",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Feb 26",
        expire: "February 26, 2023",
      },
      {
        id: 2,
        name: "So you've bought coffee... now what?",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Mar 26",
        expire: "March 5, 2023",
      },
    ],
    Audio: [
      {
        id: 1,
        name: "Is tech making coffee better or worse?",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Mar 26",
        expire: "March 5, 2023",
      },
      {
        id: 2,
        name: "The most innovative things happening in coffee",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Feb 26",
        expire: "March 5, 2023",
      },
    ],
    Video: [
      {
        id: 1,
        name: "Ask Me Anything: 10 answers to your questions about coffee",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Feb 26",
        expire: "March 5, 2023",
        shareCount: 5,
      },
      {
        id: 2,
        name: "The worst advice we've ever heard about coffee",
        describtion: "Does drinking coffee make you smarter?",
        price: "0.62 ETH, $992.79",
        creator: "milad",
        img: logo,
        date: "Feb 26",
        expire: "March 5, 2023",
        shareCount: 2,
      },
    ],
  });
  const lastepisode = props.episode.slice(-5).reverse();
  return (
    <>
      <div className="relative">
        <img className="bg-cover xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">NFT</span>
        </div>
        <div className="absolute -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-black p-1">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-yellow-500",
                      "ring-opacity-60 ring-offset-2 focus:outline-none",
                      selected ? "shadow" : "text-blue-100 hover:text-white"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels>
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel
                  key={idx}
                  className={classNames(
                    "rounded-xl p-3",
                    "ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2"
                  )}
                >
                  <ul className="grid grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-4">
                    {[...posts].reverse().map((post) => (
                      <>
                        {post.date ===
                        new Date().toString().slice(4, 10) ? null : (
                          <li
                            key={post.id}
                            className="group relative rounded-md bg-zinc-900 border-8 border-zinc-900"
                          >
                            <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-zinc-900 group-hover:opacity-75 lg:aspect-none lg:h-90">
                              <img
                                src={post.img}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded"
                              />
                            </div>
                            <h1 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.name}
                            </h1>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              {post.describtion}
                            </h3>
                            <h3 className="flex justify-center text-sm font-medium leading-7 text-gray-200">
                              <span className="font-semibold text-gray-500">
                                Creator:
                              </span>
                              &nbsp; {post.creator}
                            </h3>

                            <ul className="mt-1 flex justify-between text-xs font-normal leading-4 text-gray-200">
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Current price:
                                </span>
                                &nbsp;{post.price}
                              </li>
                              <li>
                                <span className="font-semibold text-gray-500">
                                  Expire date:
                                </span>
                                &nbsp;{post.expire}
                              </li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                "absolute inset-0 rounded-md",
                                "ring-yellow-500 focus:z-10 focus:outline-none focus:ring-2"
                              )}
                            />
                          </li>
                        )}
                      </>
                    ))}
                  </ul>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}
