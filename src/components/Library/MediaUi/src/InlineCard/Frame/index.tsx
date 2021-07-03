import React from 'react';

import { Wrapper } from './styled';

export interface FrameViewProps {
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
  /** A flag that determines whether the card needs a backgorund or not */
  withoutBackground?: boolean;
  children?: React.ReactNode;
  link?: string;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
}

export class Frame extends React.Component<FrameViewProps> {
  handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const { onClick } = this.props;
    if (onClick) {
      event.preventDefault();
      event.stopPropagation();
      onClick(event);
    }
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== ' ' && event.key !== 'Enter') {
      return;
    }
    const { onClick } = this.props;
    if (onClick) {
      event.preventDefault();
      event.stopPropagation();
      onClick(event);
    }
  };

  // prevent default on mousedown to avoid inline card losing focus
  handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  render() {
    const {
      isSelected,
      children,
      onClick,
      link,
      withoutBackground,
    } = this.props;
    const isInteractive = Boolean(onClick);
    return (
      <Wrapper
        href={link}
        withoutBackground={withoutBackground}
        isSelected={isSelected}
        isInteractive={isInteractive}
        tabIndex={isInteractive ? 0 : undefined}
        role={isInteractive ? 'button' : undefined}
        onClick={this.handleClick}
        onMouseDown={this.handleMouseDown}
        onKeyPress={this.handleKeyPress}
      >
        {children}
      </Wrapper>
    );
  }
}
