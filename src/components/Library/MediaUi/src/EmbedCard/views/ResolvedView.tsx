/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';

import { LinkIcon as LinkGlyph } from '@discovr/core.icon';

import { ExpandedFrame } from '../components/ExpandedFrame';
import { ImageIcon } from '../components/ImageIcon';
import { ContextViewModel } from '../../types';
import { Frame } from '../components/Frame';

export interface EmbedCardResolvedViewProps {
  /** The title of the link */
  title?: string;
  /** The context view model */
  context?: ContextViewModel;
  /** The link to display */
  link: string;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
  /** will show the frame regardless of user interaction */
  isFrameVisible?: boolean;
  /** The src to be used for the `iframe` */
  preview?: string;
  /** The optional click handler */
  onClick?: (evt: React.MouseEvent) => void;

  inheritDimensions?: boolean;
}

export const EmbedCardResolvedView = React.forwardRef<
  HTMLIFrameElement,
  EmbedCardResolvedViewProps
>(
  (
    {
      link,
      context,
      onClick,
      isSelected,
      isFrameVisible,
      preview,
      title,
      inheritDimensions,
    },
    embedIframeRef,
  ) => {
    const src = typeof context?.icon === 'string' ? context.icon : undefined;
    const text = title || context?.text;
    const linkGlyph = React.useMemo(
      () => <LinkGlyph label="icon" size="small" />,
      [],
    );
    const icon = React.useMemo(
      () => <ImageIcon src={src} default={linkGlyph} />,
      [src, linkGlyph],
    );

    return (
      <ExpandedFrame
        isSelected={isSelected}
        isFrameVisible={isFrameVisible}
        href={link}
        icon={icon}
        text={text}
        onClick={onClick}
        inheritDimensions={inheritDimensions}
      >
        <Frame url={preview} ref={embedIframeRef} />
      </ExpandedFrame>
    );
  },
);
