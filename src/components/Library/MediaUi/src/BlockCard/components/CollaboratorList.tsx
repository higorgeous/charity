/** @jsx jsx */
import { jsx } from '@emotion/core';

import AvatarGroup from '@discovr/core.avatar-group';
import { AvatarClickEventHandler } from '@discovr/core.avatar';
import { mq } from '../utils';

export interface Collaborator {
  /* The image to be used in an `avatar - this should be a url to the image src */
  src?: string;
  /* The name of the person in the avatar. */
  name: string;
}

export interface CollaboratorListProps {
  /* An array of items to be passed to avatar-group for displaying */
  items: Collaborator[];
  /* The function to be called on avatar click. See the docs of avatar-group for this function's signature. */
  handleAvatarClick: AvatarClickEventHandler;
  /* The function to be called on clicking on the more avatars button. Should almost certainly open a view to see all avatars */
  handleMoreAvatarsClick: React.MouseEventHandler;
}

export const CollaboratorList = ({
  items,
  handleAvatarClick = () => {},
  handleMoreAvatarsClick = () => {},
}: CollaboratorListProps) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <span css={mq({ display: ['none', 'inherit'] })}>
      <AvatarGroup
        maxCount={4}
        appearance="stack"
        size="small"
        data={items}
        onAvatarClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          handleAvatarClick(event);
        }}
        onMoreClick={(event) => {
          event.stopPropagation();
          event.preventDefault();
          handleMoreAvatarsClick(event);
        }}
      />
    </span>
  );
};
