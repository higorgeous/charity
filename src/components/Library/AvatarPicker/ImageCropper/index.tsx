import React, { Component } from 'react';

import CrossIcon from '@atlaskit/icon/glyph/cross';
import { MediaImage } from '../../MediaUi';

import { isImageRemote } from './isImageRemote';
import {
  CircularMask,
  Container,
  DragOverlay,
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
      containerSize,
      top,
      left,
      imageWidth,
      imageHeight,
      imageSource,
      onRemoveImage,
      imageOrientation,
      onImageLoaded,
    } = this.props;
    const containerStyle = {
      width: `${containerSize}px`,
      height: `${containerSize}px`,
    };
    const width = imageWidth ? `${imageWidth}px` : 'auto';
    const height = imageHeight ? `${imageHeight}px` : 'auto';

    const imageContainerStyle = {
      width,
      height,
      display: width === 'auto' ? 'none' : 'block',
      top: `${top}px`,
      left: `${left}px`,
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
            stretch={true}
            previewOrientation={imageOrientation}
            onImageLoad={onImageLoaded}
            onImageError={this.onImageError}
          />
        </ImageContainer>
        {isCircularMask ? <CircularMask /> : <RectMask />}
        <DragOverlay onMouseDown={this.onDragStarted} />
        <RemoveImageContainer>
          <RemoveImageButton onClick={onRemoveImage}>
            <CrossIcon
              size="small"
              label="Remove image"
            />
          </RemoveImageButton>
        </RemoveImageContainer>
      </Container>
    );
  }
}

export default ImageCropper;
