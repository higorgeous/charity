/** @jsxImportSource @emotion/react */
import React from 'react';

import ErrorIcon from '@atlaskit/icon/glyph/error';
import WarningIcon from '@atlaskit/icon/glyph/warning';

import {
  Header,
  Title,
  titleIconWrapperStyles,
  TitleText,
} from '../styles/Content';
import { AppearanceType, KeyboardOrMouseEvent } from '../types';

const TitleIcon = ({ appearance }: { appearance?: 'danger' | 'warning' }) => {
  if (!appearance) {
    return null;
  }

  const Icon = appearance === 'danger' ? ErrorIcon : WarningIcon;

  return (
    <span css={titleIconWrapperStyles(appearance)}>
      <Icon label={`${appearance} icon`} />
    </span>
  );
};

export interface HeaderProps extends HeaderComponentProps {
  /**
    Boolean OR Function indicating which element to focus when the component mounts
    TRUE will automatically find the first "tabbable" element within the modal
    Providing a function should return the element you want to focus
  */
  /** Component to render the header of the modal. */
  component?: React.ElementType<HeaderComponentProps>;
}

export interface HeaderComponentProps {
  /**
   * Unique identifier for the heading.
   */
  id?: string;

  /**
   * Appearance of the modal that changes the color of the primary action and adds an icon to the heading.
   */
  appearance?: AppearanceType;

  /**
   * Callback function called when the modal dialog is requesting to be closed.
   */
  onClose: (e: KeyboardOrMouseEvent) => void;

  /**
   * Heading for the modal dialog.
   */
  heading?: React.ReactNode;

  /**
   * When set to `true` should be used to draw a line underneath the header signifying that there is overflowed content inside the modal dialog.
   */
  showKeyline?: boolean;

  /**
   * When `true` will allow the heading to span multiple lines.
   * Defaults to `false`.
   */
  isHeadingMultiline?: boolean;
}

export default class ModalHeader extends React.Component<HeaderProps, {}> {
  static defaultProps = {
    isHeadingMultiline: true,
  };

  render() {
    const {
      id,
      appearance,
      component,
      heading,
      onClose,
      showKeyline,
      isHeadingMultiline,
    } = this.props;
    const warning = 'You can provide `component` OR `heading`, not both.';

    if (!component && !heading) {
      return null;
    }
    if (component && heading) {
      console.warn(warning); // eslint-disable-line no-console
      return null;
    }
    if (component) {
      return React.createElement(component, {
        id,
        appearance,
        onClose,
        showKeyline,
        isHeadingMultiline,
      });
    }

    return (
      <Header showKeyline={showKeyline}>
        <Title>
          <TitleIcon appearance={appearance} />
          <TitleText isHeadingMultiline={isHeadingMultiline} id={id}>
            {heading}
          </TitleText>
        </Title>
      </Header>
    );
  }
}
