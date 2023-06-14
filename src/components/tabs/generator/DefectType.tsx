import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { Input, Label, MenuList, SelectList } from '../../../mui/customize'
import { SelectChangeEvent } from '@mui/material'
import { DefectType as Defect, Models } from '../../../models';
import i18next from 'i18next';
import StartGenerating from './modal/StartGenerating';

// interface Selects {
//   id: number,
//   name: string,
//   value: number | string,
//   label: string,
//   list: string[],
// }

interface IProps {
  isLoading: boolean,
  open: boolean,
  model: number | undefined,
  listDefect: Defect[] | undefined,
  numberMask: number,
  defect: number | undefined,
  listModels: Models[],
  localBlob: File | null | undefined,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setNumberMask: Dispatch<SetStateAction<number>>,
  setDefect: Dispatch<SetStateAction<number | undefined>>,
  setModel: Dispatch<SetStateAction<number | undefined>>,
  sendMask: () => void
}

const DefectType = ({ isLoading, open, setOpen, localBlob, numberMask, setNumberMask, model, setModel, defect, setDefect, listModels, listDefect, sendMask }: IProps) => {

  const { t } = i18next;
  const listMask: string[] = ['Random', 'In Paint']
  const [progress, setProgress] = useState<number>(17)
  const [mask, setMask] = useState<string>(listMask[0])
  const changeModal = (event: SelectChangeEvent<unknown>, name: string) =>
    name === 'model' ? setModel(event.target.value as number) :
      name === 'mask' ? setMask(event.target.value as string) :
        setDefect(event.target.value as number)

  const changeProgress = (event: Event, newValue: number | number[]) => setProgress(newValue as number);

  // const listSelect: Selects[] = [
  //   { id: 1, name: 'model', value: model, label: t('model'), list: listModels },
  //   { id: 2, name: 'mask', value: mask, label: t('mask_mode'), list: listMask }
  // ]

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
      <div className='flex items-start flex-col mt-6'>
        <Label className='!mb-1'>{t('model')}</Label>
        <SelectList
          size='small'
          value={model || ''}
          onChange={(event) => changeModal(event, 'model')}
        >
          {listModels.map((item: Models) =>
            <MenuList key={item.id} value={item.id}>
              {item.name}
            </MenuList>
          )}
        </SelectList>
      </div>
      {/* <div className='flex flex-col mt-6'>
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
          onChange={(event: Event, newValue: number | number[]) => mask === 'Random' && changeProgress(event, newValue)}
          aria-label="Default"
          color='secondary'
          max={100}
        />
      </div> */}
      <div className='flex flex-col mt-6'>
        <Label className='!mb-1'>{t('number_of_images')}</Label>
        <Input
          inputProps={{ min: 0, max: 100 }}
          value={numberMask}
          onChange={e => +e.target.value >= 0 && +e.target.value <= 100 && setNumberMask(+e.target.value)}
          type='number'
          size='small'
        />
      </div>
      <StartGenerating
        sendMask={sendMask}
        isLoading={isLoading}
        localBlob={localBlob}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}

export default DefectType