import React from "react";
import { Routes, Route} from 'react-router-dom'
import FrontPage from "./components/FrontPage";
import User from "./components/User";
import Product from "./components/Product";
import Stock from "./components/Stock";
import Warehouse from "./components/Warehous";
import Transfer from "./components/Transfer";
import UserSignup from "./components/User/signup";

function App(){
    return (
        <div>
                <Routes>
                    <Route path="/" element={<FrontPage/>}/>
                    <Route path="/user" element={<User/>}/>
                    <Route path="/userSingup" element={<UserSignup/>}/>
                    <Route path="/sroduct" element={<Product/>}/>
                    <Route path="/stock" element={<Stock/>}/>
                    <Route path="/warehouse" element={<Warehouse/>}/>
                    <Route path="/transfer" element={<Transfer/>}/>
                </Routes>
        </div>
    )
}

export default App