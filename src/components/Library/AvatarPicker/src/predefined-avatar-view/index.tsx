import React, { PureComponent } from 'react';

import { ArrowLeftIcon } from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';

import { PredefinedAvatarViewWrapper, LargeAvatarImage } from './styled';
import { Avatar } from '../avatar-list';

export interface BackBtnProps {
  onClick?: () => void;
}

class BackBtn extends PureComponent<BackBtnProps, {}> {
  render() {
    return (
      <Button
        className="back-button"
        iconAfter={<ArrowLeftIcon label="" />}
        onClick={this.props.onClick}
      />
    );
  }
}

export interface PredefinedAvatarViewProps {
  avatars: Array<Avatar>;
  onGoBack?: () => void;
  onAvatarSelected: (avatar: Avatar) => void;
  selectedAvatar?: Avatar;
  predefinedAvatarsText?: string;
  translate?: any;
}

export class PredefinedAvatarView extends PureComponent<
  PredefinedAvatarViewProps,
  {}
> {
  static defaultProps: PredefinedAvatarViewProps = {
    avatars: [],
    onAvatarSelected() {},
  };

  render() {
    const {
      avatars,
      selectedAvatar,
      onGoBack,
      predefinedAvatarsText,
      translate,
    } = this.props;
    const cards = avatars.map((avatar, idx) => {
      const elementKey = `predefined-avatar-${idx}`;
      return (
        <li key={elementKey}>
          <LargeAvatarImage
            isSelected={avatar === selectedAvatar}
            src={avatar.dataURI}
            onClick={this.createOnItemClickHandler(avatar)}
          />
        </li>
      );
    });

    return (
      <PredefinedAvatarViewWrapper>
        <div className="header">
          <BackBtn onClick={onGoBack} />
          <div className="description">
            {predefinedAvatarsText || translate('common.media.default-avatars')}
          </div>
        </div>
        <ul>{cards}</ul>
      </PredefinedAvatarViewWrapper>
    );
  }

  createOnItemClickHandler(avatar: Avatar) {
    const { onAvatarSelected } = this.props;
    return () => {
      if (onAvatarSelected) {
        onAvatarSelected(avatar);
      }
    };
  }
}
