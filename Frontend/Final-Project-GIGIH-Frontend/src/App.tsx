import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import BodyContainer from "./components/Body/BodyContainer";
import Video from "./components/Video/Video";
import io from "socket.io-client";
import DrawerExample from "./components/Drawer/DrawerExample";

const socket = io(import.meta.env.VITE_WS_URL);

function App() {
  window.localStorage.setItem("chakra-ui-color-mode", "dark");
  return (
    <>
      {/* <RouterProvider router={}/> */}
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/play" element={<NavbarContainer />}>
          <Route index element={<BodyContainer socket={socket} />} />
          <Route path="video" element={<BodyContainer socket={socket} />} />
        </Route>
        <Route path="/video/:videoId" element={<Video socket={socket} />} />
      </Routes>
      <DrawerExample />
    </>
  );
}

export default App;
