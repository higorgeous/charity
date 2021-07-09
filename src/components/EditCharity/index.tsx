import { FC, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import EditorSuccessIcon from '@atlaskit/icon/glyph/editor/success';
import EditorErrorIcon from '@atlaskit/icon/glyph/editor/error';
import { useFlags } from '@atlaskit/flag';

import { Tab, TabList, TabPanel, TabsProps } from 'react-tabs';
const Tabs = dynamic<TabsProps>(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false },
);

import firebaseClient from '@services/Firebase/Client';
import segmentEvent from '@utils/segmentEvent';

import Form from '../Library/Form';

import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';

import { Wrapper } from './styles';

type Props = {
  charity: any;
  user: any;
};

const EditCharity: FC<Props> = ({ charity, user }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [formFields, setFormFields] = useState({
    name: charity.name,
    tag: charity.tag,
    type: {
      label: charity.type.label,
      value: charity.type.value,
    },
    location: {
      abbr: charity.location.abbr,
      code: charity.location.code,
      icon: charity.location.icon,
      name: charity.location.name,
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
      const currentTime = new Date().toISOString();
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
            lastEdited: currentTime,
          },
          { merge: true },
        )
        .then(() => {
          firebaseClient
            .firestore()
            .collection('users')
            .doc(user!.uid)
            .collection('charities')
            .doc(charity.createdAt)
            .set(
              {
                name: formFields.name,
                tag: formFields.tag,
                logo: formFields.logo,
                lastEdited: currentTime,
                verified: false,
              },
              { merge: true },
            )

            .then(() => {
              showFlag({
                icon: <EditorSuccessIcon label="success" />,
                appearance: 'success',
                title: `Congratulations`,
                description: `You've edited ${formFields.name} on Gorgeous. Find the progress of your update in your account.`,
                isAutoDismiss: true,
              });
              segmentEvent('editCharity', {
                id: charity.id,
                charity: formFields.name,
                user: user?.uid,
              });
              router.push(`/charity/${charity.id}`);
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
            <form {...formProps} name="edit-charity">
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
                  <Tab>
                    <span>
                      <span>2. Images</span>
                    </span>
                  </Tab>
                  <Tab>
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

export default EditCharity;
