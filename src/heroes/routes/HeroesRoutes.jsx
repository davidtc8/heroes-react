import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DCPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DCPage />} />
          <Route path="search" element={<DCPage />} />
          <Route path="hero/:id" element={<HeroPage />} />
          <Route path="searchpage" element={<SearchPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </>
  );
};
