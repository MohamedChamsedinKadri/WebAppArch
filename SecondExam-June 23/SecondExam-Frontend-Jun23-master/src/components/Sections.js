import React from "react";
import { useState, useEffect } from "react";
import sectionService from "../services/sectionService";
import Section from "./Section";

const Sections = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    sectionService.getAllSections().then((response) => {
      setSections(response.data);
    });
  }, []);

  return (
    <div>
      <h1>sections</h1>
      {sections.map((section) => {
        return <Section key={section.id} section={section} />;
      })}
    </div>
  );
};

export default Sections;
