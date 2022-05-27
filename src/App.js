import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Parts from "./pages/Home/Parts/Parts";
import Purchase from "./pages/Home/Purchase/Purchase";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./sherd/Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forgotten from "./pages/Login/Forgotten";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import PageNotFound from "./sherd/PageNotFound/PageNotFound";
import Footer from "./sherd/Footer/Footer";
import MyOrders from "./pages/Dashboard/MyOrders";
import MyReviews from "./pages/Dashboard/Dashboard/MyReviews";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/parts" element={<Parts />}></Route>
        <Route path="/purchase/:id" element={<Purchase />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotten" element={<Forgotten />}></Route>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="my-reviews" element={<MyReviews />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}
export default App;
