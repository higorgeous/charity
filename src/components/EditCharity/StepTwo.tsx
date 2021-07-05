import { FC, useState } from 'react';
import ExportIcon from '@atlaskit/icon/glyph/export';
import AtlasButton from '@atlaskit/button';

import ChevronRight from '@components/CTA/ChevronRight';

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

  const [
    logoPreviewSourceViaFileAPI,
    setLogoPreviewSourceViaFileAPI,
  ] = useState('');
  const [
    logoPreviewSourceViaDataURIAPI,
    setLogoPreviewSourceViaDataURIAPI,
  ] = useState(formFields.logo);

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
            isRequired
            defaultValue={formFields.image}
          >
            {({ fieldProps }) => (
              <>
                <Textfield placeholder="Link to image URL" {...fieldProps} />
                <HelperMessage>
                  E.g.
                  https://images.unsplash.com/photo-1494832944834-a08818c634b0.
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
