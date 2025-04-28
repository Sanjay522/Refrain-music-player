import React from "react";
import discover from "../assets/discover1.svg";
import Line from "./Line";

const navItems = [
  {
    title: "Menu",
    links: [{ icon: discover, label: "Home" }],
  },
  {
    title: "Discover",
    links: [
      { icon: discover, label: "Discover" },
      { icon: discover, label: "Album" },
      { icon: discover, label: "Artist" },
    ],
  },
  {
    title: "Library",
    links: [
      { icon: discover, label: "Recently added" },
      { icon: discover, label: "Most played" },
    ],
  },
  {
    title: "Playlist & Favorite",
    links: [
      { icon: discover, label: "Your favorite" },
      { icon: discover, label: "Your playlist" },
      { icon: discover, label: "Add playlist" },
    ],
  },
  {
    title: "General",
    links: [
      { icon: discover, label: "Setting" },
      {
        icon: discover,
        label: "Logout",
        className: "text-red-500 hover:text-white",
      },
    ],
  },
];

const Nav = () => {
  return (
    <div className="w-[18%]  text-white h-full p-6 space-y-6 flex justify-between relative">
      <div className=" fixed">
        <h1 className="text-red-500 text-4xl font-bold">Refrain</h1>

        {navItems.map((section, index) => (
          <div key={index} className="my-2">
            <p className="text-xs uppercase mb-2 text-gray-400">
              {section.title}
            </p>
            <div className="space-y-2">
              {section.links.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center p-2 rounded-md hover:bg-red-500 transition  cursor-pointer `}
                >
                  <img src={item.icon} alt="" className="h-4 w-4" />
                  <p className={`ml-3 text-sm ${item.className || ""} `}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
      <Line />

    </div>
  );
};

export default Nav;
