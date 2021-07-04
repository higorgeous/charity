import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import CharitySubmissions from './CharitySubmissions';
import CharityVotes from './CharityVotes';

import { Wrapper } from './styles';

const Account: FC = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>
            <span>
              <span>Vote history</span>
            </span>
          </Tab>
          <Tab>
            <span>
              <span>Charity submissions</span>
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <CharityVotes />
        </TabPanel>
        <TabPanel>
          <CharitySubmissions />
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

export default Account;
