import React from "react";
import "./App.css";
import UserList from "./components/UserList";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <UserList />
      <ProductsList />
    </div>
  );
}

export default App;
