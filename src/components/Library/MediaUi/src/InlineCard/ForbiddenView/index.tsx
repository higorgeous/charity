import React from 'react';
import { FormattedMessage } from 'react-intl';

import { colors } from '@discovr/core.theme';
import { LockIcon } from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';

import { Frame } from '../Frame';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { DBIconWrapper } from '../Icon';
import { messages } from '../../messages';
import {
  IconStyledButton,
  LowercaseAppearance,
  LinkAppearance,
} from '../styled';

export interface InlineCardForbiddenViewProps {
  /** The url to display */
  url: string;
  /** The icon of the service (e.g. Dropbox/Asana/Google/etc) to display */
  icon?: React.ReactNode;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /** The optional handler for "Connect" button */
  onAuthorise?: () => void;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
}

const { R400, N500 } = colors;

const FallbackForbiddenIcon = (
  <DBIconWrapper>
    <LockIcon label="error" size="small" primaryColor={R400} />
  </DBIconWrapper>
);

export class InlineCardForbiddenView extends React.Component<InlineCardForbiddenViewProps> {
  handleRetry = (event: React.MouseEvent<HTMLElement>) => {
    const { onAuthorise } = this.props;
    event.preventDefault();
    event.stopPropagation();
    onAuthorise!();
  };

  renderMessage = () => {
    const { onAuthorise, url } = this.props;
    const link = <LinkAppearance>{url}</LinkAppearance>;
    return !onAuthorise ? (
      link
    ) : (
      <>
        {link}
        {' - '}
        <Button
          spacing="none"
          appearance="subtle-link"
          onClick={this.handleRetry}
          component={IconStyledButton}
        >
          <FormattedMessage {...messages.invalid_permissions}>
            {(formattedMessage) => {
              return <>{formattedMessage}, </>;
            }}
          </FormattedMessage>
          <FormattedMessage {...messages.try_another_account}>
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
    const { url, icon, onClick, isSelected } = this.props;
    return (
      <Frame link={url} onClick={onClick} isSelected={isSelected}>
        <IconAndTitleLayout
          icon={icon ? icon : FallbackForbiddenIcon}
          title={this.renderMessage()}
          titleColor={N500}
        />
      </Frame>
    );
  }
}
