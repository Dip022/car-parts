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
import MakeAdmin from "./pages/Dashboard/Admin/MakeAdmin";
import RequireAuth from "./pages/Login/RequireAuth";
import RequireAdmin from "./pages/Login/RequireAdmin";
import ManageAllOrders from "./pages/Dashboard/Admin/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/Admin/ManageProducts";
import AddProduct from "./pages/Dashboard/Admin/AddProduct";
import Profile from "./pages/Home/Profile/Profile";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/parts" element={<Parts />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgotten" element={<Forgotten />}></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route path="my-orders" element={<MyOrders />}></Route>
          <Route path="my-reviews" element={<MyReviews />}></Route>
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-order"
            element={
              <RequireAdmin>
                <ManageAllOrders />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-produts"
            element={
              <RequireAdmin>
                <ManageProducts />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}
export default App;
