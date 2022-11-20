import { useState } from "react";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import AboutPage from "./page/AboutPage";
import { Navigate, Route, Routes } from "react-router-dom";
import ProductPage from "./page/ProductPage";
import ProductDetailpage from "./page/ProductDetailpage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate]=useState(false)
  // 시작이 대문자면 함수가 아닌 컴포넌트
  const PrivateRoute = () => {
    return authenticate == true?<UserPage/>:<Navigate to="/login"/>

  }
  return (
    <div>
      {/* 각각의 페이지 switch 역할 */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductPage/>}/>
        <Route path="/products/:id" element={<ProductDetailpage/>}/>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/user" element={<PrivateRoute/>}/>
      </Routes>
    </div>

  );
}

export default App;
