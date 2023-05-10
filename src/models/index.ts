export interface ResultImg {
  id: number,
  created: string,
  file: string
}

export interface Result {
  id: number,
  image: number,
  mask_image: number,
  defect_type_id: number,
  defect_model_id: number,
  result_images: ResultImg[],
}

export interface Annotation {
  x: number,
  y: number,
  width: number,
  height: number,
  xDestination: number,
  yDestination: number,
  type: string,
  name: string,
}

export interface Annotations {
  [key: string]: Annotation
}

export interface DefectType {
  id: number,
  name: string
}

export interface TimeDate {
  startDate: Date;
  endDate: Date;
  key: string;
}