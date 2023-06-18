export interface ResultImg {
  id: number,
  file: string
}

interface DefectResult {
  id: number,
  name: string
}

export interface Result {
  id: number,
  image: number,
  created: string,
  mask_image: number,
  defect_model_id: number,
  result_images: ResultImg[],
  defect_type: DefectResult
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

export interface Url {
  id: number | string,
  file: string,
  blob?: string | File,
  isLoaded?: boolean,
  newUploaded?: true
}

export interface Size {
  width: number,
  height: number,
}

export interface Lines {
  points: number[],
  strokeWidth: number,
  color: string
}

export interface ResponseImg {
  id: number,
  file: string,
  mask_file: string,
  defect_type: number,
  isLoaded: boolean,
  blob: string
}

export interface Point {
  points: number[],
  strokeWidth: number,
  color?: string
}

export interface Models {
  id: number,
  file: string,
  name: string
}