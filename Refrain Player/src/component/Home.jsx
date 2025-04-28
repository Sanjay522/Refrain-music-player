import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Song from "./Song";
import Artist from "./Artist";
import Playlist from "./Playlist";
import SongLine from "./SongLine";
import  { useEffect, useState } from "react";
import Album from "./Album";
import CircleButton from "./button/CircleButton";


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
      <Nav />

      <div className="flex-grow">
        <Hero />
        <div className="flex">
          <Song />
          <Song />
          <Song />
          <Song />
          <Song />
        </div>
        <div className="flex">
          <Artist />
          <Artist />

          <Artist />

          <Artist />

          <Artist />
        </div>
        <div>
          <Playlist />
        </div>
        <SongLine />
        <div>
          <Album/>
          <CircleButton/>

        </div>

     
      </div>
    </div>
  );
};

export default Home;
