import { FC } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { Wrapper } from './styles';

const Account: FC = () => {
  return (
    <Wrapper>
      <Tabs>
        <TabList>
          <Tab>
            <span>
              <span>Voting history</span>
            </span>
          </Tab>
          <Tab>
            <span>
              <span>Charity submissions</span>
            </span>
          </Tab>
        </TabList>
        <TabPanel>
          <h2>Voting history</h2>
        </TabPanel>
        <TabPanel>
          <h2>Charity submissions</h2>
        </TabPanel>
      </Tabs>
    </Wrapper>
  );
};

export default Account;
