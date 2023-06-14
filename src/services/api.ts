import api from "./http.service";

export const request = {
  listDefect: () => api.get('types/'),
  createDefect: (name: string, command: string) => api.post('types/', {
    name, command
  }),
  uploadImage: (file: FormDataEntryValue | null, mask_file: FormDataEntryValue | null, defect_type_id: number) => api.post('images/', {
    file,
    mask_file: file,
    defect_type_id,
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  sendGenerate: (file: FormData) => api.post('generate/', file, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  listImage: () => api.get('images/'),
  deleteImage: (id: number) => api.delete(`images/${id}`),
  createFineTune: () => api.post('fine_tune/'),
  getResult: () => api.get('results/'),
  getModels: () => api.get('models/'),
  statusFine: () => api.get('fine_tune/status/'),
  statusGenerate: () => api.get('generate/status/')
}