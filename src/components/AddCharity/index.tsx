import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import EditorSuccessIcon from '@atlaskit/icon/glyph/editor/success';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
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
import firebaseClient from '@services/Firebase/Client';
import { useFlags } from '@atlaskit/flag';

const AddCharity: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formFields, setFormFields] = useState({});

  const { showFlag } = useFlags();

  const onSubmit = (data: any) => {
    if (selectedTab === 0) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(1);
    } else if (selectedTab === 1) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(2);
    } else {
      firebaseClient
        .firestore()
        .collection('charities')
        .add({
          name: data['charity-name'],
          tag: data['charity-tag'],
          type: data['charity-type'],
          location: data['charity-location'],
          description: data['charity-description'],
          logo: data['charity-logo'],
          image: data['charity-image'],
          video: data['charity-video'] ? data['charity-video'] : null,
          website: data['charity-website'],
          twitter: data['charity-twitter'] ? data['charity-twitter'] : null,
          facebook: data['charity-facebook'] ? data['charity-facebook'] : null,
          instagram: data['charity-instagram']
            ? data['charity-instagram']
            : null,
          youtube: data['charity-youtube'] ? data['charity-youtube'] : null,
          verified: false,
        })
        .then(() => {
          showFlag({
            icon: <EditorSuccessIcon label="success" />,
            appearance: 'success',
            title: `Congratulations, you've added a new charity.`,
            isAutoDismiss: true,
          });
        })
        .catch((error) => {
          showFlag({
            icon: <EditorErrorIcon label="error" />,
            appearance: 'error',
            title: error.message,
            isAutoDismiss: true,
          });
        });
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
