import React from "react";
import GtpSearchBar from "./GtpSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_IMAGE_URL } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMAGE_URL} alt="background img" />
      </div>
      <GtpSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
