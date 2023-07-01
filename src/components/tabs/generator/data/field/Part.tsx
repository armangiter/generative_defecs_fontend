import { Dispatch, SetStateAction, useState } from "react"
import { MenuItem } from "@mui/material"
import { Selector, Title } from "../../../../../mui/customize"
import { t } from "i18next"

interface IProps {
  part: number,
  setPart: Dispatch<SetStateAction<number>>
}

function Part({ part, setPart }: IProps) {
  return (
    <div>
      <Title className="!mb-1.5">{t('part')}</Title>
      <Selector
        value={part}
        fullWidth
      // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Selector>
    </div>
  )
}

export default Part