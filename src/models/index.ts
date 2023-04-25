export interface Result {
  id: number,
  date: string,
  type: string,
  model: string,
  images: string[]
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