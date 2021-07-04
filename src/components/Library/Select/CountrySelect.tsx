/** @jsxImportSource @emotion/react */

import { groupedCountries } from './data/countries';
import Select from './Select';
import { FormatOptionLabelMeta } from './types';

interface OptionType {
  abbr: string;
  code: number;
  icon: string;
  name: string;
}

// custom option renderer
const labelCSS = () => ({
  alignItems: 'center',
  display: 'flex',
  lineHeight: 1.2,
});

const flagCSS = () => ({
  fontSize: '18px',
  marginRight: '8px',
});

const Opt = ({ children, icon }: any) => (
  <div css={labelCSS()}>
    <span css={flagCSS()}>{icon}</span>
    {children}
  </div>
);

// return the country name; used for searching
const getOptionLabel = ({ name }: OptionType) => name;

// set the country's abbreviation for the option value, (also searchable)
const getOptionValue = (opt: OptionType) => opt.abbr;

// the text node of the control
const controlLabel = ({ icon, name }: OptionType) => (
  <Opt icon={icon}>{name}</Opt>
);
// the text node for an option
const optionLabel = ({ icon, name }: OptionType) => (
  <Opt icon={icon}>{name}</Opt>
);

// switch formatters based on render context (menu | value)
const formatOptionLabel = (
  opt: OptionType,
  { context }: FormatOptionLabelMeta<OptionType>,
) => (context === 'value' ? controlLabel(opt) : optionLabel(opt));

// put it all together
const CountrySelect = (props: any) => (
  <Select
    isClearable={false}
    formatOptionLabel={formatOptionLabel}
    getOptionLabel={getOptionLabel}
    getOptionValue={getOptionValue}
    isMulti={false}
    options={groupedCountries}
    styles={{
      container: (css) => ({ ...css }),
      dropdownIndicator: (css) => ({ ...css, paddingLeft: 0 }),
      menu: (css) => ({ ...css, width: 300 }),
      group: (css) => ({ ...css, paddingTop: 0, paddingBottom: 0 }),
      groupHeading: (css) => ({ ...css, display: 'none' }),
    }}
    {...props}
  />
);

export default CountrySelect;
