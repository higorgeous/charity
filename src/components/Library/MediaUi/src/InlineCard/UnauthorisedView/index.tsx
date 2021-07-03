import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CustomThemeButton as Button } from '@discovr/core.button';
import { LockIcon } from '@discovr/core.icon';
import { colors } from '@discovr/core.theme';

import { messages } from '../../messages';
import { Frame } from '../Frame';
import { DBIconWrapper } from '../Icon';
import { IconAndTitleLayout } from '../IconAndTitleLayout';
import { IconStyledButton, LinkAppearance } from '../styled';

export interface InlineCardUnauthorizedViewProps {
  /** The url to display */
  url: string;
  /** The icon of the service (e.g. Dropbox/Asana/Google/etc) to display */
  icon?: React.ReactNode;
  /** The optional click handler */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /** What to do when a user hit "Try another account" button */
  onAuthorise?: () => void;
  /** A flag that determines whether the card is selected in edit mode. */
  isSelected?: boolean;
}

const { N500, R400 } = colors;

const FallbackUnauthorizedIcon = (
  <DBIconWrapper>
    <LockIcon label="error" size="small" primaryColor={R400} />
  </DBIconWrapper>
);

export class InlineCardUnauthorizedView extends React.Component<InlineCardUnauthorizedViewProps> {
  handleConnectAccount = (event: React.MouseEvent<HTMLElement>) => {
    const { onAuthorise } = this.props;
    event.preventDefault();
    event.stopPropagation();
    return onAuthorise!();
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
          component={IconStyledButton}
          onClick={this.handleConnectAccount}
        >
          <FormattedMessage {...messages.connect_link_account} />
        </Button>
      </>
    );
  };

  render() {
    const { url, icon, onClick, isSelected } = this.props;
    return (
      <Frame link={url} onClick={onClick} isSelected={isSelected}>
        <IconAndTitleLayout
          icon={icon ? icon : FallbackUnauthorizedIcon}
          title={this.renderMessage()}
          titleColor={N500}
        />
      </Frame>
    );
  }
}
