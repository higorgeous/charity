import React from 'react';
import { FormattedMessage } from 'react-intl';

import { colors } from '@discovr/core.theme';
import { ErrorIcon } from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';

import { Frame } from '../Frame';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { DBIconWrapper } from '../Icon';
import { messages } from '../../messages';
import {
  LinkAppearance,
  IconStyledButton,
  LowercaseAppearance,
  NoLinkAppearance,
} from '../styled';

export interface InlineCardErroredViewProps {
  /** The url to display */
  url: string;
  /** The error message to display */
  message: string;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /** What to do when a user clicks "Try again" button */
  onRetry?: () => void;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
  /* Icon to be provided to show this error state */
  icon?: React.ReactNode;
}

const { R300 } = colors;

export class InlineCardErroredView extends React.Component<InlineCardErroredViewProps> {
  handleRetry = (event: React.MouseEvent<HTMLElement>) => {
    const { onRetry } = this.props;
    if (onRetry) {
      event.preventDefault();
      event.stopPropagation();
      onRetry();
    }
  };

  renderMessage = () => {
    const { onRetry, url, message } = this.props;
    const link = <LinkAppearance>{url}</LinkAppearance>;
    const errorMessage = <NoLinkAppearance>{message}</NoLinkAppearance>;
    return !onRetry ? (
      <>
        {link} - {errorMessage}
      </>
    ) : (
      <>
        {link} - {errorMessage},&nbsp;
        <Button
          spacing="none"
          appearance="subtle-link"
          component={IconStyledButton}
          onClick={this.handleRetry}
        >
          <FormattedMessage {...messages.try_again}>
            {(formattedMessage) => {
              return (
                <LowercaseAppearance>{formattedMessage}</LowercaseAppearance>
              );
            }}
          </FormattedMessage>
        </Button>
      </>
    );
  };

  render() {
    const { url, onClick, isSelected, icon } = this.props;
    return (
      <Frame link={url} onClick={onClick} isSelected={isSelected}>
        <IconAndTitleLayout
          icon={
            icon || (
              <DBIconWrapper>
                <ErrorIcon label="error" size="small" primaryColor={R300} />
              </DBIconWrapper>
            )
          }
          title={this.renderMessage()}
        />
      </Frame>
    );
  }
}
