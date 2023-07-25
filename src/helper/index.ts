import { SelectLogin } from "../models"

const changeSelector = (selector: SelectLogin[], newValue: string, id: number) => {
    let prevSelector = selector
    const newSelector = prevSelector.map(i => {
        if (i.id === id) {
            return {
                ...i,
                value: newValue
            }
        } else {
            return {
                ...i
            }
        }
    })

    return newSelector
}

export { changeSelector }