import api from "./http.service";

export const request = {
  listDefect: () => api.get('types/'),
  createDefect: (name: string) => api.post('types/', {
    name
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
  getModels: () => api.get('models/')
}