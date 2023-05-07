import api from "./http.service";

export const request = {
  listDefect: () => api.get('defects/types'),
  createDefect: (name: string) => api.post('defects/types/', {
    name
  }),
  uploadImage: (file: FormDataEntryValue | null, defect_type_id: number) => api.post('defects/images/', {
    file,
    defect_type_id
  }, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  listImage: () => api.get('defects/images/'),
  createFineTune: () => api.post('defects/fine_tune/'),
}