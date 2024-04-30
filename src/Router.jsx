import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";

import { useContext } from "react";
import { userContext } from "./contextComponent/Context";
import SearchData from "./components/searchData/SearchData";

const Router = () => {
  const { search } = useContext(userContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        {search !== "" ? (
          <Route path="/search" element={<SearchData />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
};

export default Router;
