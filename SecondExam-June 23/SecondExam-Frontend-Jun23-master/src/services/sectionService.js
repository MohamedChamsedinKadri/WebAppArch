import API from "./baseService";

const sectionService = {
  createSection: (section) => {
    try {
      return API.post(`/sections`, section);
    } catch (error) {
      console.log(error);
    }
  },
  getAllSections: () => {
    try {
      return API.get(`/sections`);
    } catch (error) {
      console.log(error);
    }
  },
  getSectionById: (sectionId) => {
    try {
      return API.get(`/sections/${sectionId}`);
    } catch (error) {
      console.log(error);
    }
  },
  updateSection: (sectionId, section) => {
    try {
      return API.put(`/sections/${sectionId}`, section);
    } catch (error) {
      console.log(error);
    }
  },
  deleteSection: (sectionId) => {
    try {
      return API.delete(`/sections/${sectionId}`);
    } catch (error) {
      console.log(error);
    }
  },
  findStudentsById: (sectionId) => {
    try {
      return API.get(`/sections/${sectionId}/students`);
    } catch (error) {
      console.log(error);
    }
  },
  updateStudentsInSection: (sectionId, studentId) => {
    try {
      return API.put(`/sections/${sectionId}/students/${studentId}`);
    } catch (error) {
      console.log(error);
    }
  },
  removeStudentsInSection: (sectionId, studentId) => {
    try {
      return API.delete(
        `/sections/${sectionId}/students/${studentId}`
      );
    } catch (error) {
      console.log(error);
    }
  },
};


export default sectionService;