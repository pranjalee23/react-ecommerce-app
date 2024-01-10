import { Routes, Route } from "react-router-dom";
import "./app.scss";
import Navigation from "./routes/Navigation";
import Home from "./routes/home";
import SignIn from "./routes/SignIn";

const Shop = () => {
  return (
    <h1>shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
