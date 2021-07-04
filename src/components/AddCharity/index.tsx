import { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Form from '../Library/Form';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import { Wrapper } from './styles';

const AddCharity: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const onSubmit = () => {
    if (selectedTab === 0) {
      setSelectedTab(1);
    } else if (selectedTab === 1) {
      setSelectedTab(2);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={onSubmit}>
        {({ formProps }) => (
          <form {...formProps} name="add-charity">
            <Tabs
              selectedIndex={selectedTab}
              onSelect={(index) => setSelectedTab(index)}
            >
              <TabList>
                <Tab>
                  <span>
                    <span>1. Overview</span>
                  </span>
                </Tab>
                <Tab disabled={selectedTab < 1}>
                  <span>
                    <span>2. Images</span>
                  </span>
                </Tab>
                <Tab disabled={selectedTab < 2}>
                  <span>
                    <span>3. Links</span>
                  </span>
                </Tab>
              </TabList>
              <TabPanel>
                <StepOne />
              </TabPanel>
              <TabPanel>
                <StepTwo setSelectedTab={setSelectedTab}/>
              </TabPanel>
              <TabPanel>
                <StepThree setSelectedTab={setSelectedTab}/>
              </TabPanel>
            </Tabs>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default AddCharity;
