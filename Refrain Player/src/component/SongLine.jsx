import React from "react";
import like from "../assets/like.png";
import dislike from "../assets/dislike.png";
import example from "../assets/example.png";

const SongLine = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-3xl">#1</p>
        <div className="bg-[#1f1f1f] rounded-sm flex justify-between items-center pr-10 w-[95%]">
          <img src={example} alt="" className="h-15 rounded-sm" />
          <div>
            <h1 className="text-lg">Sorfcore</h1>
            <p className="text-xs">The neighberhood</p>
          </div>
          <p className="text-base">Nov 4,2023</p>
          <p className="text-base">Hard to Imagine the Neighbourhood Ever Changing</p>
          <img src={like} alt="" className="cursor-pointer h-8"  />
          <p>3:26</p>
        </div>
      </div>
    </div>
  );
};

export default SongLine;
