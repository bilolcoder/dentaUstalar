import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "./Components/Home/AdminLayout";
import Login from "./Components/pages/Login"; // Login komponentingiz manzili
import UserHome from "./Components/UserHome/userHome";
import Asbobuskunalar from "./Components/pages/Asbobuskunalar";
import Qabullar from "./Components/pages/qabullar";
import ZubTexniklar from "./Components/pages/ZubTexniklar";
// import Bemorlar from "./Components/pages/Bemorlar";
import JamiMaxsulotlar from "./Components/ClickOpenPages/JamiMaxsulotlar";
import Faol from "./Components/ClickOpenPages/Faol";
import QolganMaxsulotlar from "./Components/ClickOpenPages/QolganMaxsulotlar";
import NoFaol from "./Components/ClickOpenPages/Nofaol";
import DasturTolovi from "./Components/ClickOpenPages/DasturTolovi";
import Shartnoma from "./Components/pages/Shartnoma";

const App = () => {
  return (
    <Routes>
      {/* 1. Saytga kirganda birinchi bo'lib Login sahifasi ochiladi */}
      <Route path="/login" element={<Login />} />

      {/* 2. Admin qismi (faqat Login orqali o'tiladi) */}
      <Route element={<AdminLayout />}>
        <Route path="/dashboard" element={<UserHome />} />
        <Route path="/asbobuskunalar" element={<Asbobuskunalar />} />
        <Route path="/zubtexnik" element={<ZubTexniklar />} />
        <Route path="/qabullar" element={<Qabullar />} />
        {/* <Route path="/bemorlar" element={<Bemorlar />} /> */}
        <Route path="/jamimaxsulotlar" element={<JamiMaxsulotlar />} />
        <Route path="/shartnoma" element={<Shartnoma />} />
        <Route path="/faol" element={<Faol />} />
        <Route path="/qolganmaxsulotlar" element={<QolganMaxsulotlar />} />
        <Route path="/nofaol" element={<NoFaol />} />
        <Route path="/dasturtolovi" element={<DasturTolovi />} />
      </Route>

      {/* 3. Foydalanuvchi boshqa yo'l yozsa, login sahifasiga yuboramiz */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
