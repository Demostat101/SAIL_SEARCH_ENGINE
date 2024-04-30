import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();
import { fetchData } from "../components/Api";
import { useNavigate } from "react-router-dom";

const Context = ({ children }) => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [googledData, setGoogledData] = useState({});
  const [input, setInput] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsperpage] = useState(10);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const searchsetter = async (word) => {
    setSearch(word);

    const Searchdata = await fetchData(word, startIndex);

    setGoogledData(Searchdata);

    const Check = await Searchdata.queries.nextPage[0];

    if (search === "" || googledData === "{}") {
      navigate("/");
    }
    navigate("/search");
  };

  const HandlePageChange = (pageNumber) => {
    return setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (search) {
      searchsetter(search);
    }
  }, [currentPage, itemsPerPage]);

  return (
    <userContext.Provider
      value={{
        search,
        setSearch,
        googledData,
        setGoogledData,
        HandlePageChange,
        setInput,
        input,
        searchsetter,
        currentPage,
        itemsPerPage,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default Context;
