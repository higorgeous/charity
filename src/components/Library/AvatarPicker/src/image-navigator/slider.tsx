import React, { Component } from 'react';

import FieldRange from '@discovr/core.range';
import {
  MediaScaleLargeIcon as ScaleLargeIcon,
  MediaScaleSmallIcon as ScaleSmallIcon,
} from '@discovr/core.icon';
import { CustomThemeButton as Button } from '@discovr/core.button';

import { SliderWrapper } from './styled';

export interface SliderProps {
  value: number;
  onChange: (value: number) => void;
}

export const defaultProps = {
  value: 0,
};

export class Slider extends Component<SliderProps, {}> {
  static defaultProps = defaultProps;

  render() {
    const { value, onChange } = this.props;
    return (
      <SliderWrapper>
        <Button
          appearance="subtle-link"
          className="zoom_button zoom_button_small"
          iconAfter={<ScaleSmallIcon label="scale-small-icon" />}
          onClick={() => onChange(0)}
        />
        <FieldRange value={value} onChange={onChange} />
        <Button
          appearance="subtle-link"
          className="zoom_button zoom_button_large"
          iconAfter={<ScaleLargeIcon label="scale-large-icon" />}
          onClick={() => onChange(100)}
        />
      </SliderWrapper>
    );
  }
}
