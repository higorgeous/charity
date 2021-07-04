import { FC, useState } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';

import Textfield from '../Library/Textfield';
import { Field, FormFooter } from '../Library/Form';

import { Container, Button } from './styles';

type Props = {
  formFields: any;
  setSelectedTab: any;
};

const StepThree: FC<Props> = ({ setSelectedTab }) => {
  return (
    <Container>
      <div>
        <Field
          name="charity-website"
          label="Website"
          isRequired
          defaultValue=""
        >
          {({ fieldProps }) => (
            <Textfield placeholder="Website address" {...fieldProps} />
          )}
        </Field>

        <Field name="charity-facebook" label="Facebook" defaultValue="">
          {({ fieldProps }) => (
            <Textfield placeholder="Facebook profile link" {...fieldProps} />
          )}
        </Field>

        <Field name="charity-twitter" label="Twitter" defaultValue="">
          {({ fieldProps }) => (
            <Textfield placeholder="Twitter profile link" {...fieldProps} />
          )}
        </Field>

        <Field name="charity-instagram" label="Instagram" defaultValue="">
          {({ fieldProps }) => (
            <Textfield placeholder="Instagram profile link" {...fieldProps} />
          )}
        </Field>

        <Field name="charity-youtube" label="YouTube" defaultValue="">
          {({ fieldProps }) => (
            <Textfield placeholder="YouTube channel link" {...fieldProps} />
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
