import { FC } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';

import Textfield from '../Library/Textfield';
import { Field, HelperMessage, FormFooter } from '../Library/Form';

import { Container, Button } from './styles';

type Props = {
  formFields: any;
  setSelectedTab: any;
};

const StepThree: FC<Props> = ({ formFields, setSelectedTab }) => {
  return (
    <Container>
      <div>
        <Field
          name="website"
          label="Website"
          isRequired
          defaultValue={formFields.website}
        >
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="Website address" {...fieldProps} />
              <HelperMessage>Link to the charity website.</HelperMessage>
            </>
          )}
        </Field>

        <Field name="twitter" label="Twitter" defaultValue={formFields.twitter}>
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="Twitter profile link" {...fieldProps} />
              <HelperMessage>
                Link to the charity Twitter profile.
              </HelperMessage>
            </>
          )}
        </Field>

        <Field
          name="facebook"
          label="Facebook"
          defaultValue={formFields.facebook}
        >
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="Facebook page link" {...fieldProps} />
              <HelperMessage>Link to the charity Facebook page.</HelperMessage>
            </>
          )}
        </Field>

        <Field
          name="instagram"
          label="Instagram"
          defaultValue={formFields.instagram}
        >
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="Instagram profile link" {...fieldProps} />
              <HelperMessage>
                Link to the charity Instagram profile.
              </HelperMessage>
            </>
          )}
        </Field>

        <Field
          name="linkedin"
          label="LinkedIn"
          defaultValue={formFields.linkedin}
        >
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="LinkedIn profile link" {...fieldProps} />
              <HelperMessage>
                Link to the charity LinkedIn profile.
              </HelperMessage>
            </>
          )}
        </Field>

        <Field name="youtube" label="YouTube" defaultValue={formFields.youtube}>
          {({ fieldProps }) => (
            <>
              <Textfield placeholder="YouTube channel link" {...fieldProps} />
              <HelperMessage>
                Link to the charity YouTube channel.
              </HelperMessage>
            </>
          )}
        </Field>

        <FormFooter>
          <Button
            id="back"
            type="button"
            onClick={() => setSelectedTab(1)}
            back
          >
            <span>
              <ChevronRight />
              Back
            </span>
          </Button>
          <Button id="submit-charity" type="submit">
            <span>Submit</span>
          </Button>
        </FormFooter>
      </div>
    </Container>
  );
};

export default StepThree;
