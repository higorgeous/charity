import React, { Component, ReactNode } from 'react';

import { FormFooterWrapper } from './styles/FormFooter';
import { Align } from './types';

interface Props {
  children?: ReactNode;
  align?: Align;
}

export default class FormFooter extends Component<Props> {
  static defaultProps = {
    align: 'end',
  };

  render() {
    const { align, children } = this.props;
    return <FormFooterWrapper align={align}>{children}</FormFooterWrapper>;
  }
}
