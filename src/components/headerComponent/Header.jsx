import { useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import "./header.css";
import { useTheme } from "../../contextComponent/ThemeContext";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useContext } from "react";
import { userContext } from "../../contextComponent/Context";

const SearchHeader = () => {
  const { search, searchsetter } = useContext(userContext);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setSearchText(search);
  }, [search]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (
      /^[a-zA-Z0-9].*/.test(searchText) ||
      /^[a-zA-Z0-9]+[" "].*/.test(searchText)
    ) {
      searchsetter(searchText);
    }
  };

  const HandleSearch = () => {
    if (
      /^[a-zA-Z0-9].*/.test(searchText) ||
      /^[a-zA-Z0-9]+[" "].*/.test(searchText)
    ) {
      searchsetter(searchText);
    }
  };

  const ClearInput = () => {
    setSearchText("");
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="resultPage">
      <div className="toggle">
        {theme === "light" ? (
          <FaMoon
            className={theme === "dark" ? "dark" : ""}
            onClick={toggleTheme}
          />
        ) : (
          <FaSun
            className={theme === "light" ? "light" : ""}
            onClick={toggleTheme}
          />
        )}
      </div>

      <div className="searchBox">
        <FaSearch
          className={theme === "dark" ? "dark" : "light"}
          onClick={HandleSearch}
          size={20}
        />
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ width: "100%" }}
          />
        </form>
        {searchText ? (
          <MdCancel
            className={theme === "dark" ? "dark" : "light"}
            onClick={ClearInput}
            size={20}
          />
        ) : null}
      </div>

      <FaMicrophone id="mic" size={30} />
    </div>
  );
};

export default SearchHeader;
