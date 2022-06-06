import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav";
import Home from "./components/home/home-welcome";
import Menu from "./components/menu/menu";
import Register from "./components/customer/customer-register";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({ uname: "Guest" });
  return (
    <> 
      <BrowserRouter>
        <userContext.Provider value={[user, setUser]}>
            <NavBar />
            <Routes>
              <Route path = "home" element = {<Home />} />
              <Route path = "menu" element = {<Menu />} />
              <Route path = "register" element = {<Register />} />
            </Routes>
          </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;