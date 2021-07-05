import React, { useState } from 'react';

import { ModalTransition } from '@atlaskit/modal-dialog';

import { AvatarPickerDialog } from '../Library/LogoPicker';

type Props = {
  logoOpen: boolean;
  setLogoOpen: any;
  setImagePreviewSourceViaFileAPI: any;
  imagePreviewSourceViaDataURIAPI: string;
  setImagePreviewSourceViaDataURIAPI: any;
};

const LogoPicker = ({
  logoOpen,
  setLogoOpen,
  setImagePreviewSourceViaFileAPI,
  imagePreviewSourceViaDataURIAPI,
  setImagePreviewSourceViaDataURIAPI,
}: Props) => {
  const [logoLoading, setLogoLoading] = useState(false);
  const saveDataURI = (dataURI: any) => {
    setImagePreviewSourceViaDataURIAPI(dataURI);
    setLogoOpen(false);
    setLogoLoading(false);
  };

  const saveFileAndCrop = (file: File) => {
    const fileURL = URL.createObjectURL(file);
    setImagePreviewSourceViaFileAPI(fileURL);
    setLogoOpen(false);
    setLogoLoading(false);
  };

  return (
    <ModalTransition>
      {logoOpen && (
        <AvatarPickerDialog
          onAvatarPicked={(selectedAvatar) => {
            saveDataURI(selectedAvatar.dataURI);
          }}
          onImagePicked={(selectedImage) => {
            setLogoLoading(true);
            saveFileAndCrop(selectedImage);
          }}
          onImagePickedDataURI={(exportedImg) => {
            setLogoLoading(true);
            saveDataURI(exportedImg);
          }}
          imageSource={imagePreviewSourceViaDataURIAPI}
          onCancel={() => setLogoOpen(false)}
          isLoading={logoLoading}
          avatars={[]}
        />
      )}
    </ModalTransition>
  );
};

export default LogoPicker;
