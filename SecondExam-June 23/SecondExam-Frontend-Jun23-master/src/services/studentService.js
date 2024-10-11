import API from "./baseService";

const studentService = {
  findAll: (filter, input) => {
    const params = { filter, input };
    return API.get(`/students`, { params });
  },
  findById: (id) => {
    return API.get(`/students/${id}`);
  },
  save: (student) => {
    return API.post(`/students`, student);
  },
  deleteById: (id) => {
    return API.delete(`/students/${id}`);
  },
  update: (id, student) => {
    return API.put(`/students/${id}`, student);
  },
};

export default studentService;
