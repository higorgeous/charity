import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Appearance } from '@discovr/core.button';

import { ActionProps } from '../components/Action';
import { messages } from '../../messages';

export const ForbiddenAction = (handler: () => void): ActionProps => ({
  id: 'connect-other-account',
  text: <FormattedMessage {...messages.try_another_account} />,
  promise: () => new Promise((resolve) => resolve(handler())),
  buttonAppearance: 'default' as Appearance,
});
