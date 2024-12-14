import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="text-lg font-semibold my-4md:m-0">
        <button className="bg-white text-black py-1 md:py-4 px-3 md:px-12   text-xl rounded-lg hover:bg-opacity-90">Play</button>
        <button className="hidden md:inline-block mx-2 bg-slate-500 text-white px-12 p-4 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-85">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
