import React from 'react';

import { MarginWrapperSquare, MarginWrapperCircle } from './styles';

export interface MarginProps {
  width: number;
  height: number;
  size: number;
  circular: boolean;
}

export interface MarginState {}

export class Margin extends React.Component<MarginProps, MarginState> {
  render() {
    const { width, height, size, circular } = this.props;
    const Element = circular ? MarginWrapperCircle : MarginWrapperSquare;

    return (
      <Element id="here it is" width={width} height={height} size={size} />
    );
  }
}
