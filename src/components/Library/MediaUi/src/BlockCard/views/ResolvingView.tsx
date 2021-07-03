/** @jsx jsx */
import { jsx } from '@emotion/core';

import { DocumentFilledIcon } from '@discovr/core.icon';
import { colors, constants } from '@discovr/core.theme';

import { Frame } from '../components/Frame';
import { gs } from '../utils';
import { FormattedMessage } from 'react-intl';
import { messages } from '../../messages';

export interface ResolvingProps {
  isSelected?: boolean;
  testId?: string;
  inheritDimensions?: boolean;
}

const { N50, N90 } = colors;
const { fontSize } = constants;

export const ResolvingView = ({
  isSelected = false,
  testId = 'block-card-resolving-view',
  inheritDimensions,
}: ResolvingProps) => (
  <Frame
    inheritDimensions={inheritDimensions}
    compact={true}
    isSelected={isSelected}
  >
    <DocumentFilledIcon size="small" primaryColor={N50} label="document-icon" />
    <span
      css={{
        fontSize: `${fontSize()}px`,
        color: N90,
        marginLeft: gs(0.5),
      }}
    >
      <FormattedMessage {...messages.loading} />
    </span>
  </Frame>
);
