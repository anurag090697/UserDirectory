/** @format */

import { createContext, useEffect, useState } from "react";
import "./App.css";
import Adduser from "./Adduser";
import Retrieveuser from "./Retrieveuser";
import { BrowserRouter, json, Route, Routes } from "react-router-dom";
import Header from "./Header";

export const userDataContext = createContext();

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    let tm = localStorage.getItem("profiles");
    tm = JSON.parse(tm);
    if (tm && tm.length > 0) setUserData(tm);
  }, []);

  useEffect(() => {
    let tm = JSON.stringify(userData);
    localStorage.setItem("profiles", tm);
    // console.log(userData)
  }, [userData]);

  return (
    <BrowserRouter>
      {" "}
      <div className='container bg-violet-100 w-full min-h-dvh'>
        <userDataContext.Provider value={{ userData, setUserData }}>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Adduser />}></Route>{" "}
            <Route path='/retrieveuser' element={<Retrieveuser />}></Route>
          </Routes>
        </userDataContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
