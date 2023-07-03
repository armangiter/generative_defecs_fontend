interface ActiveNode {
    isActive: boolean
}

type Values = any

type Results = any

interface ResultImg {
    id: number,
    file: string
}

interface Point {
    points: number[],
    strokeWidth: number,
    color?: string
}

interface Lines {
    points: number[],
    strokeWidth: number,
    color: string
}

interface Modules {
    id: number,
    name: string,
    file: string
}

interface Module {
    list: Modules[],
    value?: number
}

interface Defects {
    id: number,
    name: string,
    command: string,
    defect_model_id: string | undefined,
}

interface Defect {
    list: Defects[],
    value?: number,
}

interface Data {
    models: Module,
    defects: Defect,
    numImg: number | string
}

interface SelectLogin {
    id: number,
    title: string,
    placeholder: string,
    value: string
}

interface ResultImage {
    id: number,
    file: string
}

interface DefectResult {
    id: number,
    name: string
}

interface Result {
    id: number,
    image: number,
    created: string,
    mask_image: number,
    defect_model_id: number,
    result_images: ResultImg[],
    defect_type: DefectResult
}

interface Models {
    id: number,
    file: string,
    name: string
}

export interface Size {
    width: number,
    height: number,
}

export type {
    ActiveNode, Values, Results, ResultImg, Lines, Defect, Defects, Size,
    Module, Modules, Data, SelectLogin, Point, ResultImage, Result, Models
}