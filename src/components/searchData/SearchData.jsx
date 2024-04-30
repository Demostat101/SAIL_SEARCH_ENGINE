import { useContext, useState } from "react";
import { userContext } from "../../contextComponent/Context";
import React from "react";
import SearchHeader from "../headerComponent/Header";
import { Link } from "react-router-dom";
import "./searchData.css";

const SearchData = () => {
  const { googledData, HandlePageChange, currentPage } =
    useContext(userContext);

  return (
    <div className="result-page">
      <SearchHeader />

      <p>
        About {googledData.searchInformation.formattedTotalResults}
        results found in {
          googledData?.searchInformation.formattedSearchTime
        }{" "}
        sec
      </p>

      <div className="search-data-result">
        {googledData.items.map((data, index) => (
          <div className="search-data" key={index}>
            <Link className="headerPage" to={data.displayLink}>
              {data.displayLink}
            </Link>
            <Link className="textPage" to={data.formattedUrl}>
              <h4>{data.title}</h4>
            </Link>
            <p>{data.snippet}</p>
          </div>
        ))}
      </div>

      {
        <div className="prevNextBtn">
          <button
            className="Prev"
            disabled={currentPage === 1}
            onClick={() => HandlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          <button
            className="Next"
            onClick={() => HandlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      }
    </div>
  );
};

export default SearchData;
