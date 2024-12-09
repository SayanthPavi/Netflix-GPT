import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GtpSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[5%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 rounded-md col-span-9 tracking-widest"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4  bg-red-700 text-white rounded-lg font-semibold text-lg ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GtpSearchBar;
