import React from "react";
import { useNavigate } from "react-router-dom";

const Section = ({ section }) => {
  const navigate = useNavigate();

  return (
    <div className="SectionContent">
      <p>ID: {section.id}</p>
      <p>Name: {section.name}</p>

      <button onClick={() => navigate(`/sections/${section.id}`)}>
        {" "}
        Section Details
      </button>
      <br />
      <button onClick={() => navigate("update-section", { state: section })}>
        {" "}
        Edit
      </button>
    </div>
  );
};

export default Section;
