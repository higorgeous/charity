import React from 'react';

import Lozenge from '@discovr/core.lozenge';

import { Frame } from '../Frame';
import { LozengeProps } from '../../common';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { LozengeWrapper } from '../IconAndTitleLayout/styled';

export interface InlineCardResolvedViewProps {
  /** The optional con of the service (e.g. Dropbox/Asana/Google/etc) to display */
  icon?: React.ReactNode;
  /** The name of the resource */
  title?: string;
  /** The the optional lozenge that might represent the statux of the resource */
  lozenge?: LozengeProps;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
  /** The optional url */
  link?: string;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /** The color of the title text only (not including the icon) */
  titleTextColor?: string;
}

export class InlineCardResolvedView extends React.Component<InlineCardResolvedViewProps> {
  renderLozenge() {
    const { lozenge } = this.props;
    if (!lozenge) {
      return null;
    }
    return (
      <LozengeWrapper>
        <Lozenge
          appearance={lozenge.appearance || 'default'}
          isBold={lozenge.isBold}
        >
          {lozenge.text}
        </Lozenge>
      </LozengeWrapper>
    );
  }

  render() {
    const {
      title = '',
      isSelected,
      onClick,
      icon,
      link,
      titleTextColor,
    } = this.props;
    return (
      <Frame link={link} isSelected={isSelected} onClick={onClick}>
        <IconAndTitleLayout
          icon={icon}
          title={title}
          titleTextColor={titleTextColor}
        />
        {this.renderLozenge()}
      </Frame>
    );
  }
}
