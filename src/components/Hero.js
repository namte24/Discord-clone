import { DownloadIcon } from "@heroicons/react/outline";
import React from "react";

function Hero() {
  return (
    <div className="bg-discord_blue pb-8 md:pb-0">
      <div className="p-7 py-9 h-screen md:h-83vh md:flex relative ">
        <div className="flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center">
          <h1 className="text-5xl text-white font-bold">Your Place to Chill</h1>
          <h2 className="text-white text-lg tracking-wide lg:max-w-3xl w-full">
            Whether you're part of a school club, gaming group, worlwide art
            community, or just a handul of friends, Discord makes it easy to
            hangout and chill.
          </h2>
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6">
            <button className="bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_blurple focus:outline-none transition duration-200 ease-in-out">
              <DownloadIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button className="bg-gray-900  text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out">
              Open Discord
            </button>
          </div>
        </div>
        <div className="flex-grow ">
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62a3426a21d01b590ba3c246_2.svg"
            alt=""
            className="absolute -left-15 mt-16 sm:-left-10 md:hidden object-contain"
          />
          <img
            src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/62a3425c743f0e94a4c75635_1.svg"
            alt=""
            className="hidden md:inline w-96 h-96 object-contain scale-150 mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
