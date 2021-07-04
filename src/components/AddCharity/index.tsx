import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs';
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
);

import Form from '../Library/Form';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import { Wrapper } from './styles';

const AddCharity: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formFields, setFormFields] = useState({});

  const onSubmit = (data: any) => {
    if (selectedTab === 0) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(1);
    } else if (selectedTab === 1) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(2);
    }
  };

  console.log(formFields);

  return (
    <Wrapper>
      <Form onSubmit={(data) => onSubmit(data)}>
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
                <StepOne formFields={formFields} />
              </TabPanel>
              <TabPanel>
                <StepTwo
                  formFields={formFields}
                  setSelectedTab={setSelectedTab}
                />
              </TabPanel>
              <TabPanel>
                <StepThree
                  formFields={formFields}
                  setSelectedTab={setSelectedTab}
                />
              </TabPanel>
            </Tabs>
          </form>
        )}
      </Form>
    </Wrapper>
  );
};

export default AddCharity;
