import React, { Component } from 'react';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import { MediaImage } from '../../MediaUi';

import { isImageRemote } from './isImageRemote';
import {
  CircularMask,
  Container,
  RectMask,
  RemoveImageContainer,
  RemoveImageButton,
  ImageContainer,
} from './styles';
import { CONTAINER_INNER_SIZE } from '../AvatarPickerDialog/layout-const';

export interface ImageCropperProp {
  imageSource: string;
  containerSize?: number;
  isCircularMask?: boolean;
  top: number;
  left: number;
  imageWidth?: number;
  imageHeight?: number;
  imageOrientation: number;
  onDragStarted?: (x: number, y: number) => void;
  onImageLoaded: (image: HTMLImageElement) => void;
  onRemoveImage: () => void;
  onImageError: (errorMessage: string) => void;
  translate?: any;
}

export class ImageCropper extends Component<ImageCropperProp, {}> {
  static defaultProps = {
    containerSize: CONTAINER_INNER_SIZE,
    isCircleMask: false,
    onDragStarted: () => {},
    onImageSize: () => {},
  };

  componentDidMount() {
    const { imageSource, onImageError } = this.props;
    try {
      isImageRemote(imageSource);
    } catch (e) {
      onImageError('Could not load image, the url is invalid.');
    }
  }

  onDragStarted = (e: React.MouseEvent<{}>) => {
    if (this.props.onDragStarted) {
      this.props.onDragStarted(e.screenX, e.screenY);
    }
  };

  onImageError = () => {
    const { onImageError } = this.props;
    onImageError('Could not load image, the url is invalid.');
  };

  render() {
    const {
      isCircularMask,
      top,
      left,
      imageSource,
      onRemoveImage,
      imageOrientation,
      onImageLoaded,
    } = this.props;
    const containerStyle = {
      width: `100%`,
      height: `350px`,
    };
    const width = '100%';
    const height = '350px';

    const imageContainerStyle = {
      width,
      height,
      display: 'block',
      top: `0px`,
      left: `0px`,
      borderRadius: `4px`,
    };

    let crossOrigin: '' | 'anonymous' | 'use-credentials' | undefined;
    try {
      crossOrigin = isImageRemote(imageSource) ? 'anonymous' : undefined;
    } catch (e) {
      return null;
    }

    return (
      <Container style={containerStyle}>
        <ImageContainer style={imageContainerStyle}>
          <MediaImage
            crossOrigin={crossOrigin}
            dataURI={imageSource}
            crop={false}
            stretch={false}
            previewOrientation={imageOrientation}
            onImageLoad={onImageLoaded}
            onImageError={this.onImageError}
          />
        </ImageContainer>
        {isCircularMask ? <CircularMask /> : <RectMask />}
        <RemoveImageContainer>
          <RemoveImageButton onClick={onRemoveImage}>
            <CrossIcon size="small" label="Remove image" />
          </RemoveImageButton>
        </RemoveImageContainer>
      </Container>
    );
  }
}

export default ImageCropper;
