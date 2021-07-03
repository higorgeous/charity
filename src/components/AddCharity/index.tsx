import { FC } from 'react';

import Textfield from '../Library/Textfield';
import Form, { Field, FormFooter } from '../Library/Form';
import { CountrySelect, ValueType } from '../Library/Select';

import { Wrapper, Container, Button } from './styles';
import ChevronRight from '@components/CTA/ChevronRight';
import TextArea from '@components/Library/Textarea';

interface OptionType {
  label: string;
  value: string;
}

const AddCharity: FC = () => {
  return (
    <Wrapper>
      <Container>
        <Form onSubmit={console.log}>
          {({ formProps }) => (
            <form {...formProps} name="add-charity">
              <Field
                name="charity-name"
                label="Charity name"
                isRequired
                defaultValue=""
              >
                {({ fieldProps }) => (
                  <Textfield placeholder="Name of charity" {...fieldProps} />
                )}
              </Field>

              <Field
                name="charity-tag"
                label="Tag line"
                isRequired
                defaultValue=""
              >
                {({ fieldProps }) => (
                  <Textfield
                    maxLength={40}
                    placeholder="Up to 40 characters introducing the charity"
                    {...fieldProps}
                  />
                )}
              </Field>

              <Field<ValueType<OptionType>>
                name="charity-location"
                label="Location"
                isRequired
                defaultValue={null}
              >
                {({ fieldProps }) => (
                  <CountrySelect
                    placeholder="Location of Charity"
                    {...fieldProps}
                  />
                )}
              </Field>

              <Field<string, HTMLTextAreaElement>
                name="charity-description"
                label="Description"
                isRequired
                defaultValue=""
              >
                {({ fieldProps }) => (
                  <TextArea
                    minimumRows={5}
                    placeholder="Desciption about charity. Add mission, values and goals."
                    {...fieldProps}
                  />
                )}
              </Field>

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
                  <Textfield
                    placeholder="Facebook profile link"
                    {...fieldProps}
                  />
                )}
              </Field>

              <Field name="charity-twitter" label="Twitter" defaultValue="">
                {({ fieldProps }) => (
                  <Textfield
                    placeholder="Twitter profile link"
                    {...fieldProps}
                  />
                )}
              </Field>

              <Field name="charity-instagram" label="Instagram" defaultValue="">
                {({ fieldProps }) => (
                  <Textfield
                    placeholder="Instagram profile link"
                    {...fieldProps}
                  />
                )}
              </Field>

              <Field name="charity-youtube" label="YouTube" defaultValue="">
                {({ fieldProps }) => (
                  <Textfield
                    placeholder="YouTube channel link"
                    {...fieldProps}
                  />
                )}
              </Field>

              <FormFooter>
                <Button id="submit-charity" type="submit">
                  <span>
                    Add charity
                    <ChevronRight />
                  </span>
                </Button>
              </FormFooter>
            </form>
          )}
        </Form>
      </Container>
    </Wrapper>
  );
};

export default AddCharity;
