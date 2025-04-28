import React from "react";

const Nav2 = () => {
  const nav = ["About Us", "Contact", "Premium"];

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-transparent text-white">
      <div>
        <input
          type="text"
          placeholder="Search For Music, Artist, ..."
          className="p-2 rounded bg-gray-900 text-white w-[20vw]"
        />
      </div>

      <div className="flex gap-4">
  {nav.map((item, index) => (
    <span key={index} className="cursor-pointer hover:underline">
      {item}
    </span>
  ))}
</div>
      <div className="flex gap-8">
        <button className="px-3 py-1 bg-red-500 text-white rounded w-30 cursor-pointer hover:bg-red-700">Login</button>
        <button className="px-3 py-1 bg-red-500 text-white rounded w-30 cursor-pointer hover:bg-red-700">Sign Up</button>
      </div>
    </div>
  );
};

export default Nav2;
