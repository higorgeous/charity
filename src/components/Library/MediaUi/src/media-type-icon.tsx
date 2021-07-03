import React from 'react';
import styled from 'styled-components';

import { colors } from '@discovr/core.theme';
import {
  MediaImageIcon,
  MediaAudioIcon,
  MediaVideoIcon,
  MediaDocumentIcon,
  MediaArchiveIcon,
  MediaUnknownIcon,
} from '@discovr/core.icon';
import { MediaType } from '@discovr/media.common';

const { Y200, P200, B300 } = colors;

export interface IconWrapperProps {
  type: MediaType;
}

export const mediaTypeIconColors = {
  image: Y200,
  audio: P200,
  video: '#ff7143',
  doc: B300,
  unknown: '#3dc7dc',
  archive: '',
};

export const IconWrapper = styled.div`
  display: inline-flex;
  color: ${({ type }: IconWrapperProps) =>
    mediaTypeIconColors[type] || mediaTypeIconColors.unknown};
`;

const icons = {
  image: MediaImageIcon,
  audio: MediaAudioIcon,
  video: MediaVideoIcon,
  doc: MediaDocumentIcon,
  archive: MediaArchiveIcon,
  unknown: MediaUnknownIcon,
};

export interface FileIconProps {
  type?: MediaType;
}

const defaultType = 'unknown';

export class MediaTypeIcon extends React.Component<FileIconProps, {}> {
  static defaultProps: FileIconProps = {
    type: defaultType,
  };

  render() {
    const { type } = this.props;
    const typeWithDefault = type || defaultType;
    const Icon = icons[typeWithDefault] || icons[defaultType];

    return (
      <IconWrapper
        data-testid="media-viewer-file-type-icon"
        type={typeWithDefault}
      >
        <Icon label="media-type" size="large" />
      </IconWrapper>
    );
  }
}
