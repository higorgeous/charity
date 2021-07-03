/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { FormattedMessage } from 'react-intl';

import { Appearance, CustomThemeButton as Button } from '@discovr/core.button';
import { constants } from '@discovr/core.theme';

import { messages, MessageKey } from '../../messages';
import { gs as gridSize } from '../../BlockCard/utils';

export interface ButtonProps {
  appearance: Appearance;
  text: MessageKey;
}

export interface EmbedCardUnresolvedViewProps {
  image: string;
  context?: string;
  title: MessageKey;
  description: MessageKey;
  button?: ButtonProps;
  onClick?: () => void;
}

const { fontSize } = constants;

export const EmbedCardUnresolvedView: FC<EmbedCardUnresolvedViewProps> = ({
  image,
  title,
  description,
  button,
  context,
  onClick,
}) => {
  return (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: gridSize(4.5),
        paddingBottom: gridSize(6),
      }}
    >
      <img
        src={image}
        css={{ height: gridSize(14), marginBottom: gridSize(4) }}
      />
      <span
        css={{
          fontSize: gridSize(2.5),
          marginBottom: gridSize(1.5),
          width: gridSize(50),
          textAlign: 'center',
        }}
      >
        <FormattedMessage {...messages[title]} values={{ context }} />
      </span>
      <span
        css={{
          fontSize: fontSize(),
          marginBottom: gridSize(2.5),
          textAlign: 'center',
          width: gridSize(50),
          lineHeight: gridSize(3),
        }}
      >
        <FormattedMessage {...messages[description]} values={{ context }} />
      </span>
      {button && (
        <Button appearance={button.appearance} onClick={onClick}>
          <FormattedMessage {...messages[button.text]} />
        </Button>
      )}
    </div>
  );
};
