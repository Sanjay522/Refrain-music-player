import React from "react";
import PlayAll from "../button/PlayAll";
import trending from "../../assets/trending.png";
import Nav3 from "../Nav3";
import SongLine from "../SongLine";

const AlbumPage = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-sky-400  via-sky-700  to-gray-800 w-full rounded-lg ">
        <Nav3 />
        <div className="flex justify-between pr-10 items-end">
        <div className="flex w-[60%] justify-between p-10">
          <img src={trending} alt="" className="h-60" />
          <div className="flex flex-col justify-between py-2">
            <h1 className="text-4xl font-bold">Trending songs mix</h1>
            <p className="py-10 font-semibold">tate mcree,nightmares,the neighberhood</p>
            <div className="flex  items-center font-semibold gap-5">
              <p>20 songs</p>
              <p>1h 36m</p>
            </div>
          </div>
        </div>
          <PlayAll/>
        </div>
        <div className="py-5">
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>
            <SongLine/>

        </div>
      </div>
      
    </div>
  );
};

export default AlbumPage;
