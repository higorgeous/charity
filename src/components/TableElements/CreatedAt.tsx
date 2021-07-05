import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { VotedAtColumn } from './styles';

dayjs.extend(relativeTime);

const CreatedAt = (charity: any) => (
  <VotedAtColumn>
    <span>{dayjs(charity.createdAt).fromNow()}</span>
  </VotedAtColumn>
);

export default CreatedAt;
