/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "../saghimey.jpg";
import nightsky from "../nightsky.jpg";
import apple from "../apple.svg";
import youtube from "../youtube.svg";
import spotify from "../spotify.svg";
import googlepodcast from "../googlepodcast.svg";
import castbox from "../castbox.svg"


// eslint-disable-next-line no-unused-vars
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


export default function VideoInterviews() {
  return (
    <>
    <div className="relative">
      <img className="bg-cover" src={nightsky} alt="nightsky" />
      <div className="absolute grid justify-items-center -mt-64 w-full text-white">
        <span className="text-5xl font-sans font-bold">Video Interviews</span>
      </div>
      <div className="absolute top-2/4 mt-32 w-full min-h-max bg-black">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
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
    </>
  );
}