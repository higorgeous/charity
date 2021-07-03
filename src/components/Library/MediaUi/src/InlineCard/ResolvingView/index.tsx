import React from 'react';
import Spinner from '@discovr/core.spinner';

import { Frame } from '../Frame';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { SpinnerWrapper } from './styled';

export interface InlineCardResolvingViewProps {
  /** The url to display */
  url: string;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
}

export class InlineCardResolvingView extends React.Component<InlineCardResolvingViewProps> {
  render() {
    const { url, onClick, isSelected } = this.props;
    return (
      <Frame onClick={onClick} isSelected={isSelected}>
        <IconAndTitleLayout title={url}>
          <SpinnerWrapper className="inline-resolving-spinner">
            <Spinner size={14} />
          </SpinnerWrapper>
        </IconAndTitleLayout>
      </Frame>
    );
  }
}
