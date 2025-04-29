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
    <div className="flex">

      <div className="w-full">
        <Hero />
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">Weekly Top songs</h1>
          <div className="flex items-center">
            <Song />
            <CircleButton />
          </div>
        </div>
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">New Release Songs</h1>
          <div className="flex items-center">
            <Song />
            <CircleButton />
          </div>
        </div>
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">Trending Songs</h1>
          <div className="">
            <SongLine />
          </div>
        </div>
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">Popular Artist</h1>
          <div className="flex items-center">
          <Artist />
          <CircleButton />
          </div>
        </div>
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">Top Albums</h1>
          <div className="flex items-center">
          <Album />
          <CircleButton />
          </div>
        </div>
        <div className=" flex flex-col my-10">
          <h1 className="text-3xl font-bold">Mood Playlist</h1>
          <div className="flex items-center">
          <Playlist />
          <CircleButton />
          </div>
        </div>
        <Footer/>

      </div>
    </div>
  );
};

export default Home;
