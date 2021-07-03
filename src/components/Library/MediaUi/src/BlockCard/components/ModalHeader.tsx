/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Fragment as F } from 'react';
import { FormattedMessage } from 'react-intl';

import { HeaderComponentProps } from '@discovr/core.modal-dialog';
import {
  CloseEditorIcon as EditorCloseIcon,
  ShortcutIcon,
} from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';
import { colors } from '@discovr/core.theme';

import { gs } from '../utils';
import { Icon, IconProps } from './Icon';
import { MetadataList, MetadataListProps } from './MetadataList';
import { Byline } from './Byline';
import { messages } from '../../messages';

const { N100, N30A } = colors;

export interface HeaderProps extends HeaderComponentProps {
  title?: string;
  label: string;
  metadata?: MetadataListProps;
  icon?: IconProps;
  providerName?: string;
  url?: string;
  download?: string;
  byline?: React.ReactNode;
  onViewActionClick?: () => void;
  onDownloadActionClick?: () => void;
}
export const Header = ({
  onClose,
  title,
  label,
  metadata = { items: [] },
  icon,
  providerName,
  url,
  download,
  byline,
  onViewActionClick,
  onDownloadActionClick,
}: HeaderProps) => (
  <div
    style={{
      paddingLeft: gs(3),
      paddingRight: gs(3),
      paddingBottom: gs(2),
      paddingTop: gs(2),
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        borderBottom: `1px solid ${N30A}`,
      }}
    >
      <div>
        <div css={{ display: 'flex' }}>
          {icon && <Icon {...icon} />}
          <div css={{ paddingLeft: gs(2), paddingBottom: gs(2) }}>
            <h3>{title}</h3>
            <div css={{ color: N100 }}>
              {(metadata.items.length && (
                <MetadataList items={metadata.items} />
              )) || <Byline>{byline}</Byline>}
            </div>
          </div>
        </div>
      </div>
      <div>
        {download && (
          <Button
            appearance="primary"
            href={download}
            onClick={onDownloadActionClick}
          >
            <FormattedMessage {...messages.download} />
          </Button>
        )}
        {url && (
          <Button
            href={url}
            target="_blank"
            appearance="link"
            iconAfter={<ShortcutIcon size="small" label="go to source" />}
            onClick={onViewActionClick}
          >
            {providerName ? (
              <F>
                <FormattedMessage {...messages.viewIn} /> {providerName}
              </F>
            ) : (
              <FormattedMessage {...messages.viewOriginal} />
            )}
          </Button>
        )}
        <Button
          appearance="subtle"
          iconBefore={<EditorCloseIcon label={label} />}
          onClick={onClose}
        />
      </div>
    </div>
  </div>
);
