import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Song from "./Song";
import Artist from "./Artist";
import Playlist from "./Playlist";
import SongLine from "./SongLine";
import { useEffect, useState } from "react";
import Album from "./Album";
import CircleButton from "./button/CircleButton";
import Footer from "./Footer";

const Home = () => {
  const [tracks, setTracks] = useState([]);

  //   useEffect(() => {
  //     fetch(`https://api.jamendo.com/v3.0/tracks/?client_id=be30ae2e&format=json&limit=10`)
  //       .then((response) => {
  //         if (response.status === 429) {
  //           // Handle rate limit error
  //           alert('Rate limit reached. Please try again later.');
  //           return;
  //         }
  //         return response.json();
  //       })
  //       .then((data) => setTracks(data.results))
  //       .catch((error) => console.log(error));
  //   }, []);

  // console.log(tracks)

  return (
    <div className="flex  flex-col lg:flex-row sm:m-0 m-5 pr-1">
      <div className="w-full">
        <Hero />
        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              Weekly Top songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className=" flex justify-evenly sm:justify-start sm:flex sm:items-center">
            <Song />
            <Song />
            <Song />
            <CircleButton />
          </div>
        </div>
        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              New Release Songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className=" flex justify-evenly sm:justify-start sm:flex sm:items-center">
            <Song />
            <Song />
            <Song />
            <CircleButton />
          </div>
        </div>




        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              Trending Songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className="">
          <SongLine/>
          <SongLine/>
          <SongLine/>
          </div>
        </div>



        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              New Release Songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className=" flex justify-evenly sm:justify-start sm:flex sm:items-center">
          <Artist/>
          <Artist/>
          <Artist/>
          <CircleButton />
          </div>
        </div>



        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              New Release Songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className=" flex justify-evenly sm:justify-start sm:flex sm:items-center">
          <Album/>
          <Album/>
          <Album/>

          <CircleButton />
          </div>
        </div>



        <div className=" sm:flex sm:flex-col sm:my-10 my-5">
          <div className="flex items-center justify-between">
            <h1 className=" text-[26px] font-bold sm:text-3xl sm:font-bold">
              New Release Songs
            </h1>
            <p className="text-red-500 hover:underline text-[20px] sm:hidden">
              View all
            </p>
          </div>
          <div className=" flex justify-evenly sm:justify-start sm:flex sm:items-center">
        <Playlist/>
        <Playlist/>

        <Playlist/>

          <CircleButton />
          </div>
        </div>




        <Footer />
        <Playlist/>

        <Playlist/>

      </div>
    </div>
  );
};

export default Home;
