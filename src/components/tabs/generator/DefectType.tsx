import { useState } from 'react'
import { Input, Label, MenuList, SelectList } from '../../../mui/customize'
import { SelectChangeEvent, Slider, Button } from '@mui/material'

interface Selects {
  id: number,
  name: string,
  value: string,
  label: string,
  list: string[]
}

const DefectType = () => {

  const [progress, setProgress] = useState<number>(17)
  const [listModel, setListModel] = useState<string[]>(['Scratch-1', 'Scratch-2', 'Scratch-3'])
  const [listMask, setListMask] = useState<string[]>(['Random', 'In Paint'])
  const [model, setModel] = useState<string>(listModel[0])
  const [mask, setMask] = useState<string>(listMask[0])
  const changeModal = (event: SelectChangeEvent<unknown>, name: string) =>
    name === 'model' ? setModel(event.target.value as string) : setMask(event.target.value as string)

  const changeProgress = (event: Event, newValue: number | number[]) => setProgress(newValue as number);

  const listSelect: Selects[] = [
    { id: 1, name: 'model', value: model, label: 'Model', list: listModel },
    { id: 2, name: 'mask', value: mask, label: 'Mask Mode', list: listMask }
  ]

  return (
    <div className='w-full md:w-1/2'>
      <div className='flex items-start flex-col'>
        <Label className='!mb-1'>Defect Type</Label>
        <Input
          size='small'
          placeholder='Scratch'
        />
      </div>
      {listSelect.map((item: Selects) =>
        <div key={item.id} className='flex items-start flex-col mt-6'>
          <Label className='!mb-1'>{item.label}</Label>
          <SelectList
            size='small'
            value={item.value}
            onChange={(event) => changeModal(event, item.name)}
          >
            {item.list.map((i, idx) =>
              <MenuList key={idx} value={i}>
                {i}
              </MenuList>
            )}
          </SelectList>
        </div>
      )}
      <div className='flex flex-col mt-6'>
        <div className='flex items-center justify-between'>
          <Label>Number of Masks</Label>
          <p
            className='w-16 h-10 bg-dark-200 rounded border border-light-400 font-normal text-[15px]
            flex justify-center items-center'
          >
            {progress}
          </p>
        </div>
        <Slider
          valueLabelDisplay="auto"
          value={progress}
          onChange={changeProgress}
          aria-label="Default"
          color='secondary'
          max={80}
        />
      </div>
      <div className='flex flex-col mt-6'>
        <Label className='!mb-1'>Number of Images</Label>
        <Input
          value={20}
          size='small'
        />
      </div>
      <Button fullWidth className='!mt-6' variant='contained' color='success'>Generate</Button>
    </div>
  )
}

export default DefectType