import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import { getCookie } from "./utils/cookie";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/constant";
import BodyContainer from "./components/Body/BodyContainer";
import Video from "./components/Video/Video";

function App() {
  const [{ user }, dispatch] = useStateProvider();
  const userName = getCookie("user");

  useEffect(() => {
    dispatch({
      type: reducerCases.SET_USER,
      user: userName == "" ? userName : null,
    });
  }, [dispatch, userName]);
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<BodyContainer />} />
        <Route path="video/:productId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
