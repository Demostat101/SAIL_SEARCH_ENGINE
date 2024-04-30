import logo from "../../assets/images/sail_logo.jpg";
import { MdCancel } from "react-icons/md";
import "./home.css";
import { FaSearch } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "../../contextComponent/ThemeContext";
import { useContext } from "react";
import { userContext } from "../../contextComponent/Context";

const Home = () => {
  const { searchsetter, input, setInput } = useContext(userContext);

  const SubmitHandler = (e) => {
    e.preventDefault();

    if (/^[a-zA-Z0-9].*/.test(input) || /^[a-zA-Z0-9]+[" "].*/.test(input)) {
      searchsetter(input);
    }
  };

  const ClearInput = () => {
    setInput("");
  };

  const { theme, toggleTheme } = useTheme();

  return (
    <div className="container1">
      <div>
        <div className="header">
          <img src={logo} alt="" className="logoIMG" />

          <h3 className="logoName">SAIL SEARCH ENGINE</h3>

          <div className="toggle">
            {theme === "light" ? (
              <FaMoon
                className={theme === "light" ? "light" : ""}
                onClick={toggleTheme}
              />
            ) : (
              <FaSun
                size={20}
                className={theme === "dark" ? "dark" : ""}
                onClick={toggleTheme}
              />
            )}
          </div>
        </div>

        <hr />

        <div className="searchBody">
          <div className="firstBox">
            <button className="search">
              {" "}
              <FaSearch
                className={theme === "dark" ? "dark" : "light"}
                onClick={SubmitHandler}
                size={20}
              />
            </button>

            <form onSubmit={SubmitHandler}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="input"
              ></input>
            </form>

            {(theme === "dark" && input) || (theme === "light" && input) ? (
              <MdCancel
                size="2em"
                id="cancel"
                onClick={ClearInput}
                className="mdBlack"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
