import { useState, useEffect } from 'react'
import { Input, Label, MenuList, SelectList } from '../../../mui/customize'
import { SelectChangeEvent, Slider, Button } from '@mui/material'
import { DefectType as Defect } from '../../../models';
import i18next from 'i18next';

interface Selects {
  id: number,
  name: string,
  value: string,
  label: string,
  list: string[]
}

interface IProps {
  listDefect: Defect[] | undefined
}

const DefectType = ({ listDefect }: IProps) => {

  const { t } = i18next;
  const listMask: string[] = ['Random', 'In Paint']
  const [progress, setProgress] = useState<number>(17)
  const [listModel, setListModel] = useState<string[]>(['Scratch-1', 'Scratch-2', 'Scratch-3'])
  const [defect, setDefect] = useState<number>()
  const [model, setModel] = useState<string>(listModel[0])
  const [mask, setMask] = useState<string>(listMask[0])
  const [numberMask, setNumberMask] = useState<number>(20)
  const changeModal = (event: SelectChangeEvent<unknown>, name: string) =>
    name === 'model' ? setModel(event.target.value as string) :
      name === 'mask' ? setMask(event.target.value as string) :
        setDefect(event.target.value as number)

  const changeProgress = (event: Event, newValue: number | number[]) => setProgress(newValue as number);

  const listSelect: Selects[] = [
    { id: 1, name: 'model', value: model, label: t('model'), list: listModel },
    { id: 2, name: 'mask', value: mask, label: t('mask_mode'), list: listMask }
  ]

  useEffect(() => {
    if (listDefect) {
      setDefect(listDefect[0].id)
    }
  }, [listDefect])

  return (
    <div className='w-full md:w-1/2'>
      <div className='flex items-start flex-col'>
        <Label className='!mb-1'>{t('defect_type')}</Label>
        <SelectList
          size='small'
          value={defect || ''}
          onChange={(event) => changeModal(event, 'defect')}
        >
          {listDefect && listDefect.length && listDefect.map((item: Defect) =>
            <MenuList key={item.id} value={item.id}>
              {item.name}
            </MenuList>
          )}
        </SelectList>
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
          <Label>{t('number_of_masks')}</Label>
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
          max={100}
        />
      </div>
      <div className='flex flex-col mt-6'>
        <Label className='!mb-1'>{t('number_of_images')}</Label>
        <Input
          value={numberMask}
          onChange={e => mask === 'Random' && setNumberMask(+e.target.value)}
          type='number'
          size='small'
        />
      </div>
      <Button fullWidth className='!mt-6' variant='contained' color='success'>{t('generate')}</Button>
    </div>
  )
}

export default DefectType