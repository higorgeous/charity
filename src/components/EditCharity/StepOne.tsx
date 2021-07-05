import { FC } from 'react';

import ChevronRight from '@components/CTA/ChevronRight';
import TextArea from '@components/Library/Textarea';

import Textfield from '../Library/Textfield';
import { Field, HelperMessage, FormFooter } from '../Library/Form';
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
            <>
              <Textfield placeholder="Name of charity" {...fieldProps} />
              <HelperMessage>The name of the charity.</HelperMessage>
            </>
          )}
        </Field>

        <Field
          name="tag"
          label="Tag line"
          isRequired
          defaultValue={formFields.tag}
        >
          {({ fieldProps }) => (
            <>
              <Textfield
                maxLength={40}
                placeholder="Introduce the charity"
                {...fieldProps}
              />
              <HelperMessage>
                Tagline describing the charity mission (max. 40 characters).
              </HelperMessage>
            </>
          )}
        </Field>

        <Field<ValueType<OptionType>>
          name="type"
          label="Charity type"
          isRequired
          defaultValue={formFields.type}
        >
          {({ fieldProps }) => (
            <>
              <Select
                options={charityTypes}
                placeholder="Type of charity"
                {...fieldProps}
              />
              <HelperMessage>Select the type of charity.</HelperMessage>
            </>
          )}
        </Field>

        <Field<ValueType<OptionType>>
          name="location"
          label="Location"
          isRequired
          defaultValue={formFields.location}
        >
          {({ fieldProps }) => (
            <>
              <CountrySelect
                placeholder="Location of Charity"
                {...fieldProps}
              />
              <HelperMessage>Where is the charity based.</HelperMessage>
            </>
          )}
        </Field>

        <Field<string, HTMLTextAreaElement>
          name="description"
          label="Description"
          isRequired
          defaultValue={formFields.description}
        >
          {({ fieldProps }) => (
            <>
              <TextArea
                minimumRows={5}
                maxLength={800}
                placeholder="Desciption about charity."
                {...fieldProps}
              />
              <HelperMessage>
                The charity mission, goals and values (max. 800 characters).
              </HelperMessage>
            </>
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
