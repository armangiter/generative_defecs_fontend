import api from "./http.service";

export const request = {
  listDefect: () => api.get('types'),
  createDefect: (name: string) => api.post('types/', {
    name
  }),
  uploadImage: (file: FormDataEntryValue | null, defect_type_id: number) => api.post('images/', {
    file,
    defect_type_id
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  listImage: () => api.get('images/'),
  deleteImage: (id: number) => api.delete(`images/${id}`),
  createFineTune: () => api.post('fine_tune/'),
}