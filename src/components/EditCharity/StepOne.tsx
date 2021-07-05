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
  { label: 'Charity', value: 'Charity' },
  { label: 'Crowdfund', value: 'Crowdfund' },
];

type Props = {
  formFields: any;
};

const StepOne: FC<Props> = ({ formFields }) => {
  return (
    <Container>
      <div>
        <Field
          name="name"
          label="Charity name"
          isRequired
          defaultValue={formFields.name}
        >
          {({ fieldProps }) => (
            <Textfield placeholder="Name of charity" {...fieldProps} />
          )}
        </Field>

        <Field
          name="tag"
          label="Tag line"
          isRequired
          defaultValue={formFields.tag}
        >
          {({ fieldProps }) => (
            <Textfield
              maxLength={40}
              placeholder="Introduce the charity (max. 40 characters)"
              {...fieldProps}
            />
          )}
        </Field>

        <Field<ValueType<OptionType>>
          name="type"
          label="Charity type"
          isRequired
          defaultValue={formFields.type}
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
          name="location"
          label="Location"
          isRequired
          defaultValue={formFields.location}
        >
          {({ fieldProps }) => (
            <CountrySelect placeholder="Location of Charity" {...fieldProps} />
          )}
        </Field>

        <Field<string, HTMLTextAreaElement>
          name="description"
          label="Description"
          isRequired
          defaultValue={formFields.description}
        >
          {({ fieldProps }) => (
            <TextArea
              minimumRows={5}
              maxLength={800}
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
