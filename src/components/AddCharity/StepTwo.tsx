import { FC, useState } from 'react';
import ExportIcon from '@atlaskit/icon/glyph/export';
import AtlasButton from '@atlaskit/button';

import ChevronRight from '@components/CTA/ChevronRight';

import Textfield from '../Library/Textfield';
import { Field, HelperMessage, FormFooter } from '../Library/Form';

import LogoPicker from './LogoPicker';
import ImagePicker from './ImagePicker';

import { Container, Button } from './styles';

type Props = {
  formFields: any;
  setSelectedTab: any;
};

const StepTwo: FC<Props> = ({ formFields, setSelectedTab }) => {
  const [logoOpen, setLogoOpen] = useState(false);
  const [imageOpen, setImageOpen] = useState(false);

  const [
    logoPreviewSourceViaFileAPI,
    setLogoPreviewSourceViaFileAPI,
  ] = useState('');
  const [
    logoPreviewSourceViaDataURIAPI,
    setLogoPreviewSourceViaDataURIAPI,
  ] = useState(formFields ? formFields['charity-logo'] : '');

  const [
    imagePreviewSourceViaFileAPI,
    setImagePreviewSourceViaFileAPI,
  ] = useState('');
  const [
    imagePreviewSourceViaDataURIAPI,
    setImagePreviewSourceViaDataURIAPI,
  ] = useState(formFields ? formFields['charity-image'] : '');

  return (
    <>
      <Container>
        <div>
          <Field
            name="charity-logo"
            label="Logo"
            id="image"
            isRequired
            defaultValue={logoPreviewSourceViaDataURIAPI}
          >
            {({ fieldProps, error }) => (
              <>
                <Textfield
                  onKeyDown={() => event!.preventDefault()}
                  onClick={() => setLogoOpen(true)}
                  placeholder="Upload your logo"
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
                {!error && (
                  <HelperMessage>
                    Logo should be square and 512px by 512px.
                  </HelperMessage>
                )}
              </>
            )}
          </Field>

          <Field
            name="charity-image"
            label="Image"
            id="image"
            isRequired
            defaultValue={imagePreviewSourceViaDataURIAPI}
          >
            {({ fieldProps, error }) => (
              <>
                <Textfield
                  onKeyDown={() => event!.preventDefault()}
                  placeholder="Upload a preview image"
                  onClick={() => setImageOpen(true)}
                  {...fieldProps}
                  elemBeforeInput={
                    <div
                      onClick={() => setImageOpen(true)}
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
                      onClick={() => setImageOpen(true)}
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
                {!error && (
                  <HelperMessage>
                    Image should be landscape and 900px by 500px.
                  </HelperMessage>
                )}
              </>
            )}
          </Field>

          <Field
            name="charity-video"
            label="YouTube video"
            defaultValue={formFields ? formFields['charity-video'] : ''}
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
      <ImagePicker
        imageOpen={imageOpen}
        setImageOpen={setImageOpen}
        setImagePreviewSourceViaFileAPI={setImagePreviewSourceViaFileAPI}
        setImagePreviewSourceViaDataURIAPI={setImagePreviewSourceViaDataURIAPI}
        imagePreviewSourceViaDataURIAPI={imagePreviewSourceViaDataURIAPI}
      />
    </>
  );
};

export default StepTwo;
