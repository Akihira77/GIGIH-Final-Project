import { Route, Routes, createBrowserRouter } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import BodyContainer from "./components/Body/BodyContainer";
import Video from "./components/Video/Video";
import { getProductsFromVideo } from "./utils/fetchApi";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BodyContainer />,
    },
    {
      path: "video/:videoId",
      element: <Video />,
      loader: async ({ params }) => {
        return getProductsFromVideo(params.videoId);
      },
    },
  ]);
  return (
    <>
      {/* <RouterProvider router={}/> */}
      <Routes>
        <Route path="/play" element={<NavbarContainer />}>
          <Route path="" element={<BodyContainer />} />
        </Route>
        <Route path="/video/:videoId" element={<Video />} />
      </Routes>
    </>
  );
}

export default App;
