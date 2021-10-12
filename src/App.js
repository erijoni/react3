import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import {Info,Info1} from './Info'
const App = () => {
  return (
    <div className="wrap">
     <Tabs  >
    <TabList className="display">
      <Tab>Domains</Tab>
      <Tab>Web Hosting </Tab>
      <Tab>Dedicated Servers </Tab>
      <Tab>Virtual Cloud Server </Tab>
      <Tab>WordPress Hosting </Tab>
      <Tab>Email Hosting </Tab>
      <Tab>VPS Hosting Servers </Tab>
      <Tab>Free Hosting </Tab>
    </TabList>

    <TabPanel>
      <Info />
    </TabPanel>
    <TabPanel>
      <Info1 />
    </TabPanel>
    <TabPanel>
      <Info />
    </TabPanel>
    <TabPanel>
      <Info1 />
    </TabPanel>
    <TabPanel>
      <Info />
    </TabPanel>
    <TabPanel>
      <Info1 />
    </TabPanel>
    <TabPanel>
      <Info />
    </TabPanel>
    <TabPanel>
      <Info1 />
    </TabPanel>
      </Tabs>
    </div>
  )
}

export default App

