import React from "react";
import artist from "../../assets/artist.png";
import Nav3 from "../Nav3";
import SongLine from "../SongLine";
import Album from "../Album";
import CircleButton from "../button/CircleButton";
import Song from "../Song";
import Playlist from "../Playlist";
import Artist from "../Artist";

const ArtistPage = () => {
  return (
    <div>
      <div className="bg-black rounded-md ">
        <div class="artist-bg bg-cover bg-center w-full rounded-md h-[50vh] flex flex-col justify-between">
          <Nav3 />
          <h1 className="text-8xl font-semibold px-10 py-15 ">Eminem</h1>
        </div>
        <div className="px-3">
          <div className="">
            <h1 className="text-4xl font-semibold p-5">Popular</h1>
            <SongLine />
            <SongLine />

            <SongLine />
            <SongLine />
            <SongLine />
          </div>
          <div className="flex justify-center items-center">
            <button className="text-white bg-red-500 p-2 rounded-md hover:bg-red-800">
              Show more
            </button>
          </div>

          <div>
            <h1 className="text-2xl font-semibold">Artist's Albums</h1>
            <div className="flex items-center">
              <Album />
              <CircleButton />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Single Songs</h1>
            <div className="flex items-center">
                <Song/>
              <CircleButton />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Artist's Playlist</h1>
            <div className="flex items-center">
              <Playlist/>
              <CircleButton />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold">Eminem Fans Also Listen To</h1>
            <div className="flex items-center">
              <Artist/>
              <CircleButton />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
