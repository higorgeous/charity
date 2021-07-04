import React, { PureComponent } from 'react';

import ModalDialog, { ModalFooter } from '@atlaskit/modal-dialog';
import { CustomThemeButton as Button } from '@atlaskit/button';

import { fileToDataURI, dataURItoFile } from '../../MediaUi';

import { Avatar } from '../AvatarList';
import ImageNavigator, { CropProperties } from '../ImageNavigator';
import { PredefinedAvatarList } from '../PredefinedAvatarList';
import {
  AvatarPickerViewWrapper,
  ModalHeader,
  CroppingWrapper,
  ModalFooterButtons,
} from './styles';
import { PredefinedAvatarView } from '../PredefinedAvatarView';
import { LoadParameters } from '../ImageNavigator/index';

import { DEFAULT_VISIBLE_PREDEFINED_AVATARS } from './layout-const';
import {
  AVATAR_DIALOG_WIDTH,
  AVATAR_DIALOG_HEIGHT,
  CONTAINER_INNER_SIZE,
} from './layout-const';
import {
  AvatarPickerDialogProps,
  AvatarPickerDialogState,
  Mode,
} from './types';

export const MAX_SIZE_MB = 1;

export const ACCEPT = ['image/gif', 'image/jpeg', 'image/png'];

export const fixedCrop = {
  x: 0,
  y: 0,
  size: CONTAINER_INNER_SIZE,
} as CropProperties;

export class AvatarPickerDialog extends PureComponent<
  AvatarPickerDialogProps,
  AvatarPickerDialogState
> {
  static defaultProps = {
    avatars: [],
  };

  state: AvatarPickerDialogState = {
    mode: Mode.Cropping,
    selectedAvatar: this.props.defaultSelectedAvatar,
    selectedImageSource: this.props.errorMessage
      ? undefined
      : this.props.imageSource,
    selectedImage: undefined,
    errorMessage: this.props.errorMessage,
  };

  setSelectedImageState = async (selectedImage: File) => {
    // this is the main method to update the image state,
    // it is bubbled from the ImageCropper component through ImageNavigator when the image is loaded
    try {
      this.setState({ selectedImage });
      const dataURI = await fileToDataURI(selectedImage);
      this.setState({ selectedImageSource: dataURI });
      // eslint-disable-next-line no-empty
    } catch (e) {}
  };

  setSelectedAvatarState = (avatar: Avatar) => {
    this.setState({
      selectedAvatar: avatar,
    });
  };

  onImageNavigatorLoad = (loadParams: LoadParameters) => {
    this.exportCroppedImage = loadParams.export;
  };

  /**
   * Initialised with no-op function.  Is assigned cropped image exporting
   * function when internal ImageCropper mounts via this.onImageNavigatorLoad
   */
  exportCroppedImage = () => '';

  onSaveClick = () => {
    const { onImagePicked, onImagePickedDataURI, onAvatarPicked } = this.props;
    const { selectedImage, selectedAvatar } = this.state;

    if (selectedImage) {
      const exportedCroppedImageURI = this.exportCroppedImage();
      if (onImagePicked) {
        onImagePicked(dataURItoFile(exportedCroppedImageURI), fixedCrop);
      }
      if (onImagePickedDataURI) {
        onImagePickedDataURI(exportedCroppedImageURI);
      }
    } else if (selectedAvatar) {
      onAvatarPicked(selectedAvatar);
    }
  };

  onShowMore = () => {
    this.setState({ mode: Mode.PredefinedAvatars });
  };

  onGoBack = () => {
    this.clearErrorState();
  };

  onRemoveImage = () => {
    this.setState({
      selectedImageSource: undefined,
      selectedImage: undefined,
      mode: Mode.Cropping,
    });
  };

  clearErrorState = () => {
    this.setState({
      mode: Mode.Cropping,
      errorMessage: undefined,
    });
  };

  setErrorState = (errorMessage: string) => {
    this.setState({
      mode: Mode.Cropping,
      errorMessage,
    });
  };

  onImageUploaded = () => {
    this.clearErrorState();
  };

  onImageError = (errorMessage: string) => {
    this.setErrorState(errorMessage);
  };

  render() {
    const content = (
      <ModalDialog
        height={`${AVATAR_DIALOG_HEIGHT}px`}
        width={`${AVATAR_DIALOG_WIDTH}px`}
        components={{
          Header: this.headerContent,
          Footer: this.footerContent,
        }}
        onClose={this.props.onCancel}
        shouldCloseOnOverlayClick
        shouldCloseOnEscapePress
        scrollBehavior="outside"
      >
        <AvatarPickerViewWrapper>{this.renderBody()}</AvatarPickerViewWrapper>
      </ModalDialog>
    );

    return content;
  }

  headerContent = () => {
    return <ModalHeader>Upload an image</ModalHeader>;
  };

  footerContent = () => {
    const { onCancel } = this.props;
    const { onSaveClick, isDisabled } = this;
    return (
      <ModalFooter>
        <ModalFooterButtons>
          <Button
            appearance="primary"
            onClick={onSaveClick}
            isDisabled={isDisabled}
          >
            Save
          </Button>
          <Button appearance="default" onClick={onCancel}>
            Cancel
          </Button>
        </ModalFooterButtons>
      </ModalFooter>
    );
  };

  get isDisabled() {
    const { selectedImage, selectedAvatar } = this.state;
    const { imageSource, isLoading } = this.props;
    return isLoading || !(imageSource || selectedImage || selectedAvatar);
  }

  getPredefinedAvatars(): Avatar[] {
    const { avatars } = this.props;
    const { selectedAvatar } = this.state;
    const avatarsSubset = avatars.slice(0, DEFAULT_VISIBLE_PREDEFINED_AVATARS);
    if (
      selectedAvatar &&
      avatars.indexOf(selectedAvatar) >= DEFAULT_VISIBLE_PREDEFINED_AVATARS
    ) {
      avatarsSubset[avatarsSubset.length - 1] = selectedAvatar;
    }
    return avatarsSubset;
  }

  renderPredefinedAvatarList() {
    const { isLoading } = this.props;
    const { selectedAvatar, selectedImage, selectedImageSource } = this.state;
    const avatars = this.getPredefinedAvatars();

    if (
      isLoading ||
      selectedImage ||
      selectedImageSource ||
      avatars.length === 0
    ) {
      return null;
    }

    return (
      <PredefinedAvatarList
        selectedAvatar={selectedAvatar}
        avatars={avatars}
        onAvatarSelected={this.setSelectedAvatarState}
        onShowMore={this.onShowMore}
      />
    );
  }

  renderBody() {
    const { avatars, isLoading, predefinedAvatarsText } = this.props;
    const {
      mode,
      selectedImageSource,
      selectedAvatar,
      errorMessage,
    } = this.state;

    switch (mode) {
      case Mode.Cropping:
        return (
          <CroppingWrapper>
            <ImageNavigator
              imageSource={selectedImageSource}
              errorMessage={errorMessage}
              onImageLoaded={this.setSelectedImageState}
              onLoad={this.onImageNavigatorLoad}
              onRemoveImage={this.onRemoveImage}
              onImageUploaded={this.onImageUploaded}
              onImageError={this.onImageError}
              isLoading={isLoading}
            />
            {this.renderPredefinedAvatarList()}
          </CroppingWrapper>
        );
      case Mode.PredefinedAvatars:
        return (
          <div>
            <PredefinedAvatarView
              avatars={avatars}
              onAvatarSelected={this.setSelectedAvatarState}
              onGoBack={this.onGoBack}
              selectedAvatar={selectedAvatar}
              predefinedAvatarsText={predefinedAvatarsText}
            />
          </div>
        );
    }
  }
}
