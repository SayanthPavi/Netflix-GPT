import React from "react";
import GtpSearchBar from "./GtpSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen object-cover"
          src={BG_IMAGE_URL}
          alt="background img"
        />
      </div>
      <div className="pt-[30%] md:p-0">
        <GtpSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
