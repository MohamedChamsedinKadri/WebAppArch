import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import sectionService from "../services/sectionService";
import Student from "./Student";
import studentService from "../services/studentService";

const SectionDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [sectionDetails, setSectionDetails] = useState([{}]);
  const [allStudents, setAllStudents] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const selectTagRef = React.createRef();

  useEffect(() => {
    sectionService.findStudentsById(params.id).then((response) => {
      setSectionDetails(response.data);
    });
    fetchSectionStudents();
    fetchAllStudents();
  }, [params.id]);

  const setSelectedItems = (target) => {
    setSelectedStudents((prev) => {
      if (target.checked) {
        return [...prev, parseInt(target.value)];
      } else {
        return prev.filter((item) => item !== parseInt(target.value));
      }
    });
  };

  function fetchSectionStudents() {
    sectionService.findStudentsById(params.id).then((response) => {
      setCurrentStudents(response.data);
    });
  }

  function fetchAllStudents() {
    studentService.findAll().then((response) => {
      const allStudentOptions = response.data?.map((student) => {
        return { value: student.id, label: student.name };
      });
      setAllStudents(allStudentOptions);
    });
  }

  const removeSelected = () => {
    selectedStudents.forEach((studentId) => {
      sectionService
        .removeStudentsInSection(params.id, studentId)
        .then((response) => {
          setCurrentStudents((prev) =>
            prev.filter((student) => student.id !== studentId)
          );
        });
    });
  };

  const addToSelectedStudents = () => {
    const selectedStudentId = selectTagRef.current.value;
    if (
      selectedStudentId &&
      !currentStudents.find((student) => student.id == selectedStudentId)
    ) {
      sectionService
        .updateStudentsInSection(params.id, selectedStudentId)
        .then((response) => {
          fetchSectionStudents();
        });
    }
  };

  return (
    <div>
      <h1>sectionDetails</h1>
      <p>{sectionDetails.id}</p>
      <p>{sectionDetails.name}</p>
      <p>{sectionDetails.term}</p>
      <p>{sectionDetails.academicYear}</p>
      <p>{sectionDetails.academicYear}</p>
      <h2>Roster</h2>
      <div className="students-block">
        {currentStudents.map((student) => {
          return (
            <Student
              key={student.id}
              student={student}
              setSelectedItems={setSelectedItems}
            />
          );
        })}
      </div>

      <button onClick={removeSelected}>remove selected</button>
      <div>
        {/* <select options={allStudents} ref={selectTagRef} /> */}

        <select name="allStudents" ref={selectTagRef}>
          <option value="" selected>
            Select a student
          </option>
          {allStudents.map((student) => {
            return (
              <option key={student.value} value={student.value}>
                {student.label}
              </option>
            );
          })}
        </select>
        <button onClick={addToSelectedStudents}>add</button>
      </div>

      <button onClick={() => navigate("/sections")}> Back</button>
    </div>
  );
};

export default SectionDetails;
