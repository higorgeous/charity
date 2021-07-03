/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FormattedMessage } from 'react-intl';
import { MouseEvent } from 'react';

import { LockIcon } from '@discovr/core.icon';
import { colors } from '@discovr/core.theme';

import { Frame } from '../components/Frame';
import { Provider } from '../components/Provider';
import { Byline } from '../components/Byline';
import { ActionList } from '../components/ActionList';
import { Content } from '../components/Content';
import { ActionProps } from '../components/Action';
import { messages } from '../../messages';
import { ContentFooter } from '../components/ContentFooter';
import { IconProps } from '../components/Icon';
import { ContentHeader } from '../components/ContentHeader';
import { handleClickCommon } from '../utils/handlers';
import { Link } from '../components/Link';
import { UnresolvedText } from '../components/UnresolvedText';

const textDescriptionProps = { ...messages.invalid_permissions_description };

export interface PermissionDeniedProps {
  /* Actions which can be taken on the URL */
  actions?: Array<ActionProps>;
  /* Details about the provider for the link */
  context?: { icon?: React.ReactNode; text: string };
  /* Icon for the header of the link */
  icon: IconProps;
  /* URL to the link */
  link?: string;
  /* Event handler - on click of the card, to be passed down to clickable components */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /* If selected, would be true in edit mode */
  isSelected?: boolean;
  showActions?: boolean;
}

const { R300 } = colors;

export const ForbiddenView = ({
  context = { text: '' },
  isSelected = false,
  actions = [],
  showActions = true,
  link = '',
  onClick = () => {},
}: PermissionDeniedProps) => {
  const handleClick = (event: MouseEvent<HTMLElement>) =>
    handleClickCommon(event, onClick);

  return (
    <Frame isSelected={isSelected} isFluidHeight>
      <Content isCompact>
        <div>
          <ContentHeader onClick={handleClick} link={link}>
            <Link url={link} />
          </ContentHeader>
          <Byline>
            <UnresolvedText
              icon={
                <LockIcon
                  label="forbidden-lock-icon"
                  size="small"
                  primaryColor={R300}
                />
              }
              text={<FormattedMessage {...textDescriptionProps} />}
            />
          </Byline>
        </div>
        <ContentFooter>
          <Provider name={context.text} icon={context.icon} />
          {showActions && <ActionList items={actions} />}
        </ContentFooter>
      </Content>
    </Frame>
  );
};
