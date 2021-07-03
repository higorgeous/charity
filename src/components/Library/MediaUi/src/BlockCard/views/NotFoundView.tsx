/** @jsx jsx */
import { jsx } from '@emotion/core';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { MouseEvent } from 'react';

import { WarningIcon } from '@discovr/core.icon';
import { colors } from '@discovr/core.theme';

import { Frame } from '../components/Frame';
import { Provider } from '../components/Provider';
import { Byline } from '../components/Byline';
import { Content } from '../components/Content';
import { messages } from '../../messages';
import { ContentFooter } from '../components/ContentFooter';
import { IconProps } from '../components/Icon';
import { ContentHeader } from '../components/ContentHeader';
import { Link } from '../components/Link';
import { UnresolvedText } from '../components/UnresolvedText';
import { handleClickCommon } from '../utils/handlers';

const textDescriptionProps = { ...messages.not_found_description };

export interface NotFoundProps {
  /* Details about the provider for the link */
  context?: { icon?: React.ReactNode; text: string };
  /* URL to the link */
  link?: string;
  /* Event handler - on click of the card, to be passed down to clickable components */
  onClick?: React.EventHandler<React.MouseEvent | React.KeyboardEvent>;
  /* If selected, would be true in edit mode */
  isSelected?: boolean;
  /* Icon for the header of the link */
  icon: IconProps;
}

const { R300 } = colors;

export const NotFoundView = ({
  context = { text: '' },
  isSelected = false,
  link = '',
  onClick = () => {},
}: NotFoundProps) => {
  const handleClick = (event: MouseEvent) => handleClickCommon(event, onClick);
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
                <WarningIcon
                  label="not-found-warning-icon"
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
        </ContentFooter>
      </Content>
    </Frame>
  );
};
