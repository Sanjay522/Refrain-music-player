import React from 'react';
import artist from "../assets/artist.png";

const Artist = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-2 sm:h-52 sm:w-45 h-36 w-32 hover:bg-[#1f1f1f] rounded-md m-2">
      <img className="w-25 sm:w-36 rounded-full" src={artist} alt="Artist" />
      <h1 className="py-1 text-sm sm:text-lg font-bold text-white">Eminem</h1>
    </div>
  );
};

export default Artist;
