import { FC } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';
import TextArea from '@components/Library/Textarea';

import Textfield from '../Library/Textfield';
import { Field, FormFooter } from '../Library/Form';
import Select, { CountrySelect, ValueType } from '../Library/Select';

import { Container, Button } from './styles';

interface OptionType {
  label: string;
  value: string;
}

const charityTypes: Array<OptionType> = [
  { label: 'blue', value: 'blue' },
  { label: 'red', value: 'red' },
];

const StepOne: FC = () => {
  return (
    <Container>
      <div>
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

        <Field name="charity-tag" label="Tag line" isRequired defaultValue="">
          {({ fieldProps }) => (
            <Textfield
              maxLength={40}
              placeholder="Up to 40 characters introducing the charity"
              {...fieldProps}
            />
          )}
        </Field>

        <Field<ValueType<OptionType>>
          name="charity-type"
          label="Charity type"
          isRequired
          defaultValue={null}
        >
          {({ fieldProps }) => (
            <Select
              options={charityTypes}
              placeholder="Type of charity"
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
            <CountrySelect placeholder="Location of Charity" {...fieldProps} />
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

        <FormFooter>
          <Button id="next" type="submit">
            <span>
              Next
              <ChevronRight />
            </span>
          </Button>
        </FormFooter>
      </div>
    </Container>
  );
};

export default StepOne;
