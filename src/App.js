import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Parts from "./pages/Home/Parts/Parts";
import Purchase from "./pages/Home/Purchase/Purchase";
import Header from "./sherd/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/parts" element={<Parts></Parts>}></Route>
        <Route path="/purchase" element={<Purchase></Purchase>}></Route>
      </Routes>
    </div>
  );
}
export default App;
