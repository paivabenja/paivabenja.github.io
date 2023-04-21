import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Asociarse from "./Asociarse";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/asociarse" element={<Asociarse />} />
    </Routes>
  );
}
