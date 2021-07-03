import React, { PureComponent } from 'react';

import { MoreIcon as EditorMoreIcon } from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';

import { AvatarList, Avatar } from '../avatar-list';
import { PredefinedAvatarsWrapper } from './styled';

interface ShowMoreButtonProps {
  onClick?: () => void;
}

class ShowMoreButton extends PureComponent<ShowMoreButtonProps, {}> {
  render() {
    return (
      <Button
        className="show-more-button"
        iconAfter={<EditorMoreIcon label="" size="large" />}
        onClick={this.props.onClick}
      />
    );
  }
}

export interface PredefinedAvatarListProps {
  avatars: Array<Avatar>;
  selectedAvatar?: Avatar;
  onShowMore?: () => void;
  onAvatarSelected: (avatar: Avatar) => void;
}

export class PredefinedAvatarList extends PureComponent<
  PredefinedAvatarListProps,
  {}
> {
  static defaultProps = {
    avatars: [],
  };

  UNSAFE_componentWillMount() {
    this.setState((state) => {
      const { avatars } = this.props;

      return {
        ...state,
        avatars,
      };
    });
  }

  render() {
    const {
      avatars,
      selectedAvatar,
      onShowMore,
      onAvatarSelected,
    } = this.props;
    return (
      <PredefinedAvatarsWrapper>
        <AvatarList
          avatars={avatars}
          selectedAvatar={selectedAvatar}
          onItemClick={onAvatarSelected}
        />
        <ShowMoreButton onClick={onShowMore} />
      </PredefinedAvatarsWrapper>
    );
  }
}
