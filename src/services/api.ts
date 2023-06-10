import api from "./http.service";

export const request = {
  listDefect: () => api.get('types/'),
  createDefect: (name: string) => api.post('types/', {
    name
  }),
  uploadImage: (file: FormData) => api.post('images/', file, {
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