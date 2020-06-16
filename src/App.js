import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
