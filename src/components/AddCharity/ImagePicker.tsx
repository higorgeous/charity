import React, { useState } from 'react';

import { ModalTransition } from '@atlaskit/modal-dialog';

import { AvatarPickerDialog } from '../Library/ImagePicker';

type Props = {
  imageOpen: boolean;
  setImageOpen: any;
  setImagePreviewSourceViaFileAPI: any;
  imagePreviewSourceViaDataURIAPI: string;
  setImagePreviewSourceViaDataURIAPI: any;
};

const ImagePicker = ({
  imageOpen,
  setImageOpen,
  setImagePreviewSourceViaFileAPI,
  imagePreviewSourceViaDataURIAPI,
  setImagePreviewSourceViaDataURIAPI,
}: Props) => {
  const [imageLoading, setImageLoading] = useState(false);
  const saveDataURI = (dataURI: any) => {
    setImagePreviewSourceViaDataURIAPI(dataURI);
    setImageOpen(false);
    setImageLoading(false);
  };

  const saveFileAndCrop = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    setImagePreviewSourceViaFileAPI(fileURL);
    setImageOpen(false);
    setImageLoading(false);
  };

  return (
    <ModalTransition>
      {imageOpen && (
        <AvatarPickerDialog
          onAvatarPicked={(selectedAvatar) => {
            saveDataURI(selectedAvatar.dataURI);
          }}
          onImagePicked={(selectedImage) => {
            setImageOpen(true);
            saveFileAndCrop(selectedImage);
          }}
          onImagePickedDataURI={(exportedImg) => {
            setImageOpen(true);
            saveDataURI(exportedImg);
          }}
          imageSource={imagePreviewSourceViaDataURIAPI}
          onCancel={() => setImageOpen(false)}
          isLoading={imageLoading}
          avatars={[]}
        />
      )}
    </ModalTransition>
  );
};

export default ImagePicker;
