import api from "./http.service";

export const request = {
  listDefect: () => api.get('defects/types/'),
  listDefectModels: (model: number) => api.get(`defects/types/?defect_model_id=${model}`),
  createDefect: (name: string, command: string) => api.post('defects/types/', {
    name, command
  }),
  uploadImage: (file: FormDataEntryValue | null, mask_file: FormDataEntryValue | null, defect_type_id: number) => api.post('defects/images/', {
    file,
    mask_file: file,
    defect_type_id,
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  sendGenerate: (file: FormData) => api.post('defects/generate/', file, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  listImage: () => api.get('defects/images/'),
  deleteImage: (id: number) => api.delete(`defects/images/${id}`),
  createFineTune: () => api.post('defects/fine_tune/'),
  getResult: () => api.get('defects/results/'),
  getModels: () => api.get('defects/models/'),
  statusFine: () => api.get('defects/fine_tune/status/'),
  statusGenerate: () => api.get('defects/generate/status/'),
  login: (email: string, password: string) => api.post('auth/login/', {
    email: email.toLocaleLowerCase(), password
  }),
  signup: (email: string, password: string, password2: string) => api.post('auth/signup/', {
    email, password, password2
  })
}