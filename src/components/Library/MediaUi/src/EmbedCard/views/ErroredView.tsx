/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FormattedMessage } from 'react-intl';

import { CustomThemeButton as Button } from '@discovr/core.button';
import { ErrorIcon } from '@discovr/core.icon';
import { colors, constants } from '@discovr/core.theme';

import { Frame } from '../../BlockCard/components/Frame';
import { messages } from '../../messages';
import { gs } from '../../BlockCard/utils';

export interface ErroredViewProps {
  onRetry?: (val: any) => void;
  isSelected?: boolean;
  testId?: string;
  inheritDimensions?: boolean;
}

const { R300 } = colors;
const { fontSize } = constants;

export const ErroredView = ({
  onRetry,
  isSelected = false,
  testId = 'embed-card-errored-view',
  inheritDimensions,
}: ErroredViewProps) => (
  <Frame
    inheritDimensions={inheritDimensions}
    compact={true}
    isSelected={isSelected}
  >
    <ErrorIcon size="small" primaryColor={R300} label="error-icon" />
    <span
      css={{
        fontSize: `${fontSize()}px`,
        marginLeft: gs(0.5),
        marginRight: gs(0.5),
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        // Fallback options.
        maxHeight: gs(3),
      }}
    >
      <FormattedMessage {...messages.could_not_load_link} />
    </span>
    <Button appearance="link" spacing="none" onClick={onRetry}>
      <FormattedMessage {...messages.try_again} />
    </Button>
  </Frame>
);
