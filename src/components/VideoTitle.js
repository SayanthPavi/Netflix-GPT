import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] px-28 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="text-lg font-semibold">
        <button className="bg-white text-black px-12 p-4 text-xl rounded-lg hover:bg-opacity-90">Play</button>
        <button className="mx-3 bg-slate-500 text-white px-12 p-4 text-xl bg-opacity-50 rounded-lg hover:bg-opacity-85">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
