import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import { Route, Routes } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
      </Routes>
    </>
  );
}

export default App;
