import React, { useRef, useState } from "react";
import sectionService from "../services/sectionService";
import { useLocation, useNavigate } from "react-router-dom";
const UpdateSection = () => {
  const location = useLocation();
  const section = location.state;
  const navigate = useNavigate();
  const [name, setName] = useState(section.name);
  const [term, setTerm] = useState(section.term);
  const [academicYear, setAcademicYear] = useState(section.academicYear);

  const updateSection = (e) => {
    e.preventDefault();
    const updatedSection = {
      ...section,
      name: name,
      term: term,
      academicYear: academicYear,
    };
    sectionService.updateSection(section.id, updatedSection).then(() => {
      navigate("/sections");
    });
  };

  return (
    <div>
      <div>UpdateSection</div>
      <form onSubmit={updateSection} className="section-update-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Term:
          <input
            type="text"
            name="term"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <br />
        <label>
          Academic Year:
          <input
            type="text"
            name="academicYear"
            value={academicYear}
            onChange={(e) => setAcademicYear(e.target.value)}
          />
        </label>
        <br />

        <input type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateSection;
