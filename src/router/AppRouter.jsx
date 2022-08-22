import { Route, Routes } from "react-router-dom";
import { ClassPage } from "../classes/components/ClassPage";
import { HomePage } from "../home/pages/HomePage";
import { SpellsPage } from "../spells/components/SpellsPage";
import { Navbar } from "../ui/components/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="classes" element={<ClassPage />} />
        <Route path="spells" element={<SpellsPage />} />
        <Route path="home" element={<HomePage />} />
      </Routes>
    </>
  );
};
