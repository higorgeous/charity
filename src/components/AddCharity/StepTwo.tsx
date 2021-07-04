import { FC, useState } from 'react';
import { ModalTransition } from '@atlaskit/modal-dialog';
import ExportIcon from '@atlaskit/icon/glyph/export';

import ChevronRight from '@components/CTA/ChevronRight';

import Textfield from '../Library/Textfield';
import { Field, FormFooter } from '../Library/Form';

import LogoPicker from './LogoPicker';
import { Container, Button } from './styles';

type Props = {
  setSelectedTab: any;
};

const StepTwo: FC<Props> = ({ setSelectedTab }) => {
  const [logoOpen, setLogoOpen] = useState(false);
  const [
    imagePreviewSourceViaFileAPI,
    setImagePreviewSourceViaFileAPI,
  ] = useState('');
  const [
    imagePreviewSourceViaDataURIAPI,
    setImagePreviewSourceViaDataURIAPI,
  ] = useState('');

  return (
    <ModalTransition>
      <Container>
        <div>
          <Field
            name="charity-logo"
            label="Logo"
            isRequired
            defaultValue={imagePreviewSourceViaDataURIAPI}
          >
            {({ fieldProps }) => (
              <Textfield
                isReadOnly
                onClick={() => setLogoOpen(true)}
                placeholder="Upload your logo"
                {...fieldProps}
                elemAfterInput={
                  <div
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
        setImagePreviewSourceViaFileAPI={setImagePreviewSourceViaFileAPI}
        setImagePreviewSourceViaDataURIAPI={setImagePreviewSourceViaDataURIAPI}
        imagePreviewSourceViaDataURIAPI={imagePreviewSourceViaDataURIAPI}
      />
    </ModalTransition>
  );
};

export default StepTwo;
