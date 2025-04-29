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
    <>
      {/* Sidebar - visible only on medium and above */}
      <div className="hidden sm:flex sm:w-[18%] text-white h-full p-6 justify-between relative">
        <div className="fixed">
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
                    className={`flex items-center p-2 rounded-md hover:bg-red-500 transition cursor-pointer`}
                  >
                    <img src={item.icon} alt="" className="h-4 w-4" />
                    <p className={`ml-3 text-sm ${item.className || ""}`}>
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <Line />
        </div>
      </div>

      {/* Bottom mobile nav - visible only on small screens */}
      <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black text-white p-5 py-10 flex justify-around z-50">
        <div className="flex items-center flex-col">
          <img src={discover} alt="" className="h-6 w-6" />
          <p className="text-sm mt-1">Home</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={discover} alt="" className="h-6 w-6" />
          <p className="text-sm mt-1">Discover</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={discover} alt="" className="h-6 w-6" />
          <p className="text-sm mt-1">Album</p>
        </div>
        <div className="flex items-center flex-col">
          <img src={discover} alt="" className="h-6 w-6" />
          <p className="text-sm mt-1">Library</p>
        </div>
      </div>
    </>
  );
};

export default Nav;
