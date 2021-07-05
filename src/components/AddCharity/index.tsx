import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

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
import useAuth from '@hooks/useAuth';

const AddCharity: FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formFields, setFormFields] = useState({
    name: '',
    tag: '',
    type: {
      label: '',
      value: '',
    },
    location: {
      abbr: '',
      code: '',
      icon: '',
      name: '',
    },
    description: '',
    logo: '',
    image: '',
    video: '',
    website: '',
    twitter: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  });

  const { showFlag } = useFlags();
  const { user } = useAuth();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    if (selectedTab === 0) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(1);
    } else if (selectedTab === 1) {
      setFormFields({ ...formFields, ...data });
      setSelectedTab(2);
    } else if (selectedTab === 2) {
      setFormFields({ ...formFields, ...data });
      await firebaseClient
        .firestore()
        .collection('charities')
        .add({
          name: formFields.name,
          tag: formFields.tag,
          type: formFields.type.value,
          location: `${formFields.location.icon} ${formFields.location.name}`,
          description: formFields.description,
          logo: formFields.logo,
          image: formFields.image,
          video: formFields.video,
          website: data.website,
          twitter: data.twitter,
          facebook: data.facebook,
          instagram: data.instagram,
          linkedin: data.linkedin,
          youtube: data.youtube,
          verified: false,
          votes: 0,
        })
        .then((docRef) => {
          firebaseClient
            .firestore()
            .collection('users')
            .doc(user!.uid)
            .collection('charities')
            .doc(new Date().toISOString())
            .set({
              id: docRef.id,
              name: formFields.name,
              tag: formFields.tag,
              logo: formFields.logo,
              createdAt: new Date().toISOString(),
              verified: false,
            })
            .then(() => {
              firebaseClient
                .firestore()
                .collection('charities')
                .doc(docRef.id)
                .set(
                  {
                    id: docRef.id,
                  },
                  { merge: true },
                )
                .then(() => {
                  showFlag({
                    icon: <EditorSuccessIcon label="success" />,
                    appearance: 'success',
                    title: `Congratulations`,
                    description: `You've submitted ${formFields.name} to Gorgeous. Find the progress of your submission in your account.`,
                    isAutoDismiss: true,
                  });
                  router.push('/account');
                })
                .catch((error) => {
                  showFlag({
                    icon: <EditorErrorIcon label="error" />,
                    appearance: 'error',
                    title: error.code,
                    description: error.message,
                    isAutoDismiss: true,
                  });
                });
            })
            .catch((error) => {
              showFlag({
                icon: <EditorErrorIcon label="error" />,
                appearance: 'error',
                title: error.code,
                description: error.message,
                isAutoDismiss: true,
              });
            });
        })
        .catch((error) => {
          showFlag({
            icon: <EditorErrorIcon label="error" />,
            appearance: 'error',
            title: error.code,
            description: error.message,
            isAutoDismiss: true,
          });
        });
    }
  };

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
