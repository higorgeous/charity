import React, { ReactNode } from 'react';

import { ModalSpinner } from '../../MediaUi';

import { AvatarPickerDialog } from '.';
import { AvatarPickerDialogProps } from './types';

export interface AsyncAvatarPickerDialogState {
  AvatarPickerDialog?: typeof AvatarPickerDialog;
}

export type AsyncAvatarPickerDialogProps = AvatarPickerDialogProps & {
  placeholder?: ReactNode;
};

export default class AsyncAvatarPickerDialog extends React.PureComponent<
  AsyncAvatarPickerDialogProps,
  AsyncAvatarPickerDialogState
> {
  static displayName = 'AsyncLogoPickerDialog';
  static AvatarPickerDialog?: typeof AvatarPickerDialog;

  state = {
    // Set state value to equal to current static value of this class.
    AvatarPickerDialog: AsyncAvatarPickerDialog.AvatarPickerDialog,
  };

  componentDidMount = async () => {
    if (!this.state.AvatarPickerDialog) {
      try {
        const module = await import(
          /* webpackChunkName:"@gorgeous-internal_media-logo-picker" */
          '.'
        );
        AsyncAvatarPickerDialog.AvatarPickerDialog = module.AvatarPickerDialog;
        this.setState({ AvatarPickerDialog: module.AvatarPickerDialog });
      } catch (error) {
        console.log(error);
        // TODO [MS-2272]: Add operational error to catch async import error
      }
    }
  };

  render() {
    if (!this.state.AvatarPickerDialog) {
      const { placeholder } = this.props;
      if (placeholder) {
        return placeholder;
      }

      return <ModalSpinner blankedColor="#002358c7" invertSpinnerColor />;
    }

    return <this.state.AvatarPickerDialog {...this.props} />;
  }
}
