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

type Props = {
  charity: any;
};

const AddCharity: FC<Props> = ({ charity }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formFields, setFormFields] = useState({
    name: charity.name,
    tag: charity.tag,
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
    description: charity.description,
    logo: charity.logo,
    image: charity.image,
    video: charity.video,
    website: charity.website,
    twitter: charity.twitter,
    facebook: charity.facebook,
    instagram: charity.instagram,
    linkedin: charity.linkedin,
    youtube: charity.youtube,
  });

  const { showFlag } = useFlags();
  const { user, userSubmissions } = useAuth();
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
        .doc(charity.id)
        .set(
          {
            name: formFields.name,
            tag: formFields.tag,
            type: formFields.type,
            location: formFields.location,
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
          },
          { merge: true },
        )
        .then(() => {
          firebaseClient
            .firestore()
            .collection('users')
            .doc(user!.uid)
            .collection('charities')
            .doc(new Date().toISOString())
            .set(
              {
                name: formFields.name,
                tag: formFields.tag,
                logo: formFields.logo,
                lastEdited: new Date().toISOString(),
                verified: false,
              },
              { merge: true },
            )

            .then(() => {
              showFlag({
                icon: <EditorSuccessIcon label="success" />,
                appearance: 'success',
                title: `Congratulations`,
                description: `You've edited ${formFields.name} Gorgeous. Find the progress of your update in your account.`,
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
