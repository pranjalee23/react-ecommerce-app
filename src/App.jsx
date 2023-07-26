import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Navigation from "./routes/Navigation";
import Home from "./routes/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" />
      </Route>
    </Routes>
  );
}

export default App;
