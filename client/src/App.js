import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Product from "./components/Product";
import PrivateCompoent from "./components/PrivateComponent";
import ProductList from "./components/ProductList";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateCompoent />}>
            <Route path="/" element={<ProductList />} />
            <Route path="/add" element={<Product />} />
            <Route
              path="/update"
              element={<h1>Update Product Listing Component</h1>}
            />

            <Route
              path="/logout"
              element={<h1>Log out Listing Component</h1>}
            />
            <Route
              path="/profile"
              element={<h1>Profile Listing Component</h1>}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
