/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import nightsky from "../nightsky.jpg";
import Footer from "../Components/Footer";

export default function Contact(props) {
  const lastepisode = props.episodes.slice(-5).reverse();

  return (
    <>
      <div className="relative">
        <img className="bg-cover grayscale xl:w-full" src={nightsky} alt="nightsky" />
        <div className="absolute grid justify-items-center top-8 md:top-28 w-full text-white">
          <span className="text-lg md:text-5xl font-sans font-bold">
            Contact Us
          </span>
        </div>
        <div className="absolute text-center -top-12 md:top-16 lg:top-2/4 mt-32 w-full min-h-max bg-black">
          <div className="grid justify-items-center lg:mb-56 mt-12 lg:ml-20 lg:mr-20 leading-8 text-gray-200">
            <span className="text-2xl md:text-4xl font-sans font-bold">
              Drop us a line!
            </span>
            <br />
            <br />
            <span className="text-xl md:text-2xl text-gray-400 font-sans font-bold">
              If you want to get in touch or leave us a message with questions,
              feedback, suggestions or anything else, please don't hesitate to
              fill in the form below and we'll get back to you as soon as we
              can!
            </span>
            <form>
              <div className="mt-8">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="family-name"
                  placeholder=" Your Name"
                  className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                />
              </div>
              <div className="mt-4">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder=" Your Email"
                  className="mt-1 h-12 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                />
              </div>
              <div className="mt-4">
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="message"
                  placeholder=" Your Message"
                  className="mt-1 h-32 w-72 md:w-96 bg-black block rounded-md border border-white shadow-sm focus:outline-none focus:border-yellow-500 sm:text-medium"
                />
              </div>
              <div className="flex justify-center mt-5">
                <button
                  type="submit"
                  disabled
                  className="bg-gray-500 cursor-not-allowed text-white w-32 h-16 rounded-full hover:bg-white hover:text-black"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <Footer lastepisode={lastepisode} />
        </div>
      </div>
    </>
  );
}
