import { FC, useState } from 'react';
import { ModalTransition } from '@atlaskit/modal-dialog';
import ExportIcon from '@atlaskit/icon/glyph/export';

import ChevronRight from '@components/CTA/ChevronRight';

import Textfield from '../Library/Textfield';
import { Field, FormFooter } from '../Library/Form';

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
            {({ fieldProps }) => (
              <Textfield
                isReadOnly
                onClick={() => setLogoOpen(true)}
                placeholder="Upload your logo"
                {...fieldProps}
                elemAfterInput={
                  <div
                    onClick={() => setLogoOpen(true)}
                    style={{
                      paddingRight: '6px',
                      lineHeight: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <ExportIcon label="Upload logo" />
                  </div>
                }
              />
            )}
          </Field>

          <Field
            name="charity-image"
            label="Image"
            id="image"
            isRequired
            defaultValue={imagePreviewSourceViaDataURIAPI}
          >
            {({ fieldProps }) => (
              <Textfield
                isReadOnly
                placeholder="Upload a preview image"
                onClick={() => setImageOpen(true)}
                {...fieldProps}
                elemAfterInput={
                  <div
                    onClick={() => setImageOpen(true)}
                    style={{
                      paddingRight: '6px',
                      lineHeight: '100%',
                      cursor: 'pointer',
                    }}
                  >
                    <ExportIcon label="Upload logo" />
                  </div>
                }
              />
            )}
          </Field>

          <Field
            name="charity-video"
            label="YouTube video"
            defaultValue={formFields ? formFields['charity-video'] : ''}
          >
            {({ fieldProps }) => (
              <Textfield
                placeholder="Link to a YouTube video"
                {...fieldProps}
              />
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
