import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { VotedAtColumn } from './styles';

dayjs.extend(relativeTime);

const VotedAt = (charity: any) => (
  <VotedAtColumn>
    <span>{dayjs(charity.votedAt).fromNow()}</span>
  </VotedAtColumn>
);

export default VotedAt;
