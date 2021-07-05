import { FC, useState } from 'react';
import ExportIcon from '@atlaskit/icon/glyph/export';
import AtlasButton from '@atlaskit/button';
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

import ChevronRight from '@components/CTA/ChevronRight';
import firebaseClient from '@services/Firebase/Client';

import Textfield from '../Library/Textfield';
import { Field, HelperMessage, FormFooter } from '../Library/Form';

import LogoPicker from './LogoPicker';

import { Container, Button } from './styles';

type Props = {
  formFields: any;
  setSelectedTab: any;
};

const StepTwo: FC<Props> = ({ formFields, setSelectedTab }) => {
  const [logoOpen, setLogoOpen] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [filename, setFilename] = useState('');
  const [downloadURL, setDownloadURL] = useState(formFields.image);

  const [
    logoPreviewSourceViaFileAPI,
    setLogoPreviewSourceViaFileAPI,
  ] = useState('');
  const [
    logoPreviewSourceViaDataURIAPI,
    setLogoPreviewSourceViaDataURIAPI,
  ] = useState(formFields.logo);

  const handleUploadStart = () => {
    setIsUploading(true);
    setUploadProgress(0);
  };

  const handleProgress = (progress: any) => setUploadProgress(progress);

  const handleUploadError = (error: any) => {
    setIsUploading(false);
    console.error(error);
  };

  const handleUploadSuccess = async (filename: any) => {
    const uploadedURL = await firebaseClient
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL();

    setFilename(filename);
    setDownloadURL(uploadedURL);
    setUploadProgress(100);
    setIsUploading(false);
  };

  return (
    <>
      <Container>
        <div>
          <Field
            name="logo"
            label="Logo"
            id="image"
            isRequired
            defaultValue={
              logoPreviewSourceViaDataURIAPI
                ? logoPreviewSourceViaDataURIAPI
                : formFields.logo
            }
          >
            {({ fieldProps }) => (
              <>
                <Textfield
                  onKeyDown={() => event!.preventDefault()}
                  onClick={() => setLogoOpen(true)}
                  placeholder="No logo chosen"
                  {...fieldProps}
                  elemBeforeInput={
                    <div
                      onClick={() => setLogoOpen(true)}
                      style={{
                        paddingLeft: '6px',
                        lineHeight: '100%',
                        cursor: 'pointer',
                      }}
                    >
                      <AtlasButton spacing="compact" appearance="warning">
                        Upload
                      </AtlasButton>
                    </div>
                  }
                  elemAfterInput={
                    <div
                      onClick={() => setLogoOpen(true)}
                      style={{
                        paddingRight: '6px',
                        lineHeight: '100%',
                        cursor: 'pointer',
                      }}
                    >
                      <ExportIcon size="medium" label="Upload logo" />
                    </div>
                  }
                />
                <HelperMessage>
                  Logo should be square and 512px by 512px.
                </HelperMessage>
              </>
            )}
          </Field>

          <Field
            name="image"
            label="Image"
            id="image"
            isRequired
            defaultValue={downloadURL !== '' ? downloadURL : formFields.logo}
          >
            {({ fieldProps }) => (
              <>
                <CustomUploadButton
                  hidden
                  accept="image/*"
                  filename={() =>
                    formFields.name.toLowerCase().replace(/ +/g, '-') +
                    `-` +
                    new Date().toISOString()
                  }
                  storageRef={firebaseClient.storage().ref('images')}
                  onUploadStart={handleUploadStart}
                  onUploadError={handleUploadError}
                  onUploadSuccess={handleUploadSuccess}
                  onProgress={handleProgress}
                  id="image-uploader"
                >
                  <Textfield
                    onKeyDown={() => event!.preventDefault()}
                    onClick={() => {}}
                    placeholder="Link to image URL"
                    {...fieldProps}
                    elemBeforeInput={
                      <div
                        onClick={() => {}}
                        style={{
                          paddingLeft: '6px',
                          lineHeight: '100%',
                          cursor: 'pointer',
                        }}
                      >
                        <AtlasButton spacing="compact" appearance="warning">
                          Upload
                        </AtlasButton>
                      </div>
                    }
                    elemAfterInput={
                      <div
                        onClick={() => {}}
                        style={{
                          paddingRight: '6px',
                          lineHeight: '100%',
                          cursor: 'pointer',
                        }}
                      >
                        <ExportIcon size="medium" label="Upload logo" />
                      </div>
                    }
                  />
                </CustomUploadButton>
                <HelperMessage>
                  Upload a preview image that shows the mission of the charity.
                </HelperMessage>
              </>
            )}
          </Field>
          <Field
            name="video"
            label="YouTube video"
            defaultValue={formFields.video}
          >
            {({ fieldProps }) => (
              <>
                <Textfield
                  placeholder="Link to a YouTube video"
                  {...fieldProps}
                />
                <HelperMessage>
                  E.g. https://www.youtube.com/watch?v=dQw4w9WgXcQ.
                </HelperMessage>
              </>
            )}
          </Field>
          <FormFooter>
            <Button
              id="back"
              type="button"
              onClick={() => setSelectedTab(0)}
              back
            >
              <span>
                <ChevronRight />
                Back
              </span>
            </Button>
            <Button id="next" type="submit">
              <span>
                Next
                <ChevronRight />
              </span>
            </Button>
          </FormFooter>
        </div>
      </Container>
      <LogoPicker
        logoOpen={logoOpen}
        setLogoOpen={setLogoOpen}
        setImagePreviewSourceViaFileAPI={setLogoPreviewSourceViaFileAPI}
        setImagePreviewSourceViaDataURIAPI={setLogoPreviewSourceViaDataURIAPI}
        imagePreviewSourceViaDataURIAPI={logoPreviewSourceViaDataURIAPI}
      />
    </>
  );
};

export default StepTwo;
