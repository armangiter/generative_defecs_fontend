import { useState, SyntheticEvent, ReactNode, useEffect } from 'react'
import { Box, AppBar, Tab, Tabs } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { request } from '../services/api';
import { DefectType } from '../models';
import { tabTitle } from '../helper';
import i18next from 'i18next';

// Components
import FineTune from './tabs/fineTune';
import Generator from './tabs/generator';
import Results from './tabs/results';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box className='!pt-10 !px-8 !pb-6 !relative'>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const TabPage = () => {

  const { t } = i18next;
  const listTab: string[] = [
    // t('fine_tune'),
    t('generator'),
    t('result')
  ];
  const [value, setValue] = useState<number>(1);
  const listComponent: ReactNode[] = [
    // <FineTune
    //   getListDefect={getListDefect}
    //   listDefect={listDefect}
    //   isLoading={isLoading}
    // />,
    <Generator />,
    <Results
      value={value}
    />
  ]
  tabTitle(`${listTab[value]} - ${t('rutilea')}`)

  const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue);
  const changeIndex = (index: number) => setValue(index);

  return (
    <Box className='!w-full'>
      <AppBar position="static" className='!w-[281px] !shadow-none sm:!w-fit !bg-transparent !border-transparent'>
        <Tabs
          value={value}
          onChange={handleChange}
          className="w-fit"
          indicatorColor='primary'
          sx={{
            '& .MuiTabs-indicator': { background: 'transparent' },
            '& Button': {
              borderTopLeftRadius: '5px', borderTopRightRadius: '5px',
              color: '#A5ACBA', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
            },
            '& .Mui-selected': {
              background: '#FFEDD5', color: '#2C2E36 !important', border: 'none'
            }
          }}
        >
          {listTab.map((item: string, idx: number) =>
            <Tab
              key={item}
              className={`${idx !== 0 && '!ml-1'} !text-sm !px-1.5 sm:!text-base sm:!px-4`}
              label={item}
              {...a11yProps(idx)}
            />
          )}
        </Tabs>
      </AppBar>
      <SwipeableViews className='relative' index={value} onChangeIndex={changeIndex} >
        {listComponent.map((item: ReactNode, idx: number) =>
          <div key={idx} className='bg-dark-100 rounded-r-2xl rounded-bl-2xl'>
            <TabPanel value={value} index={idx}>{item}</TabPanel>
          </div>
        )}
      </SwipeableViews>
    </Box>
  )
}

export default TabPage