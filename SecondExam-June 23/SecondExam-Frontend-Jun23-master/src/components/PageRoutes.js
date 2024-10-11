import { Route, Routes, Navigate } from "react-router";
import Sections from "./Sections";
import SectionDetails from "./SectionDetails";
import UpdateSection from "./UpdateSection";

export default function PageRoutes(props) {
  return (
    <Routes>
      <Route path="/" element={<Sections />} />
      <Route path="sections" element={<Sections />} />
      <Route path="sections/:id" element={<SectionDetails />} />
      <Route path="sections/update-section" element={<UpdateSection />} />
    </Routes>
  );
}
