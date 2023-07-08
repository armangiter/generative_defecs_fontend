interface ActiveNode {
    isActive: boolean
}

interface ResultImg {
    id: number,
    file: string,
    variant_id?: number
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
    value: string,
    type: string
}

interface ResultImage {
    id: number,
    file: string
}

interface DefectResult {
    id: number,
    name: string
}

interface Defects {
    id: number,
    name: string,
    file: string
}

interface Results {
    id: number,
    image: string,
    status: string,
    user_id: number,
    created: string,
    mask_image: number,
    defect_model_id?: number,
    defect_model: Defects,
    result_images: ResultImg[],
    defect_type: DefectResult,
    percent?: number
}

interface Result {
    generated: Results[],
    generating: Results[],
    pending: Results[]
}

interface Models {
    id: number,
    file: string,
    name: string
}

interface Size {
    width: number,
    height: number,
}

export type {
    ActiveNode, ResultImg, Lines, Defect, Defects, Size, Results,
    Module, Modules, Data, SelectLogin, Point, ResultImage, Result, Models
}