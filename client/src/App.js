import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./views/HomePage/HomePage";
import CreatePage from "./views/CreatePage/CreatePage";
import UpdatePage from "./views/UpdatePage/UpdatePage";
import DetailsPage from "./views/DetailsPage/DetailsPage";





function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path="/" element={<Navigate replace to="/meals"  />} />  {/* redirection */}
           <Route path="/meals" element={<HomePage />} />
           <Route path="/meals/new" element={<CreatePage />} />
           <Route path="/meals/edit/:id" element={<UpdatePage />}/>
           <Route path="/meals/:id" element={<DetailsPage />}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
