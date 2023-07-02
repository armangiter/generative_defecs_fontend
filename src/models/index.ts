interface ActiveNode {
    isActive: boolean
}

type Defects = any

type Values = any

type Results = any

interface ResultImg {
    id: number,
    file: string
}

interface Lines {
    points: number[],
    strokeWidth: number,
    color: string
}

export type { ActiveNode, Defects, Values, Results, ResultImg, Lines }