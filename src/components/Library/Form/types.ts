import { FormApi as FAPI } from 'final-form';

export type Align = 'start' | 'end';

export type FormApi<FormData> = FAPI<FormData>;

export type OnSubmitHandler<FormData> = (
  values: FormData,
  form: FormApi<FormData>,
  callback?: (errors?: Record<string, string>) => void,
) => void | Record<string, any> | Promise<Record<string, any> | void>;
