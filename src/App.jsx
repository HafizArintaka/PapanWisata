import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/TeamSection";
import PlaceDetail from "./pages/PlaceDetail";
import SiteLoader from "./components/SiteLoader";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      {/* tampilkan loader sekali per browser */}
      <SiteLoader minDuration={900} once={true} storageKey="site_seen_loader_v1" />

      {/* Konten utama */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}