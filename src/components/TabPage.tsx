import { useState, SyntheticEvent, ReactNode } from 'react'
import { Box, AppBar, Tab, Tabs } from '@mui/material'
import SwipeableViews from 'react-swipeable-views';
import { tabTitle } from '../helper';

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
        <Box className='!pt-10 !px-8 !pb-6'>{children}</Box>
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

  const listTab: string[] = ['Fine Tune', 'Generator', 'Results'];
  const listComponent: ReactNode[] = [<FineTune />, <Generator />, <Results />]
  const [value, setValue] = useState<number>(0);
  tabTitle(`${listTab[value]} - Rutilea`)

  const handleChange = (event: SyntheticEvent, newValue: number) => setValue(newValue);
  const changeIndex = (index: number) => setValue(index);

  return (
    <Box className='!w-full'>
      <AppBar position="static" className='!w-[281px] sm:!w-[321px] !bg-transparent !border-transparent'>
        <Tabs
          value={value}
          onChange={handleChange}
          className="w-fit"
          indicatorColor='primary'
          sx={{
            '& .MuiTabs-indicator': { background: 'transparent' },
            '& Button': {
              border: '1px solid #374151', borderTopLeftRadius: '5px', borderTopRightRadius: '5px',
              color: '#A5ACBA', fontWeight: 500, fontSize: '16px', lineHeight: '24px'
            },
            '& .Mui-selected': {
              background: '#111827', color: '#ffffff !important', border: 'none'
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
      <SwipeableViews index={value} onChangeIndex={changeIndex} >
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