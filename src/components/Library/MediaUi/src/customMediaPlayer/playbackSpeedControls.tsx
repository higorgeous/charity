import React from 'react';
import { Component } from 'react';
import { FormattedMessage, InjectedIntlProps, injectIntl } from 'react-intl';

import {
  PopupSelect,
  OptionType,
  StylesConfig,
  ValueType,
  GroupedOptionsType,
} from '@discovr/core.select';
import { colors } from '@discovr/core.theme';
import { NumericalCardDimensions } from '@discovr/media.common';
import Tooltip from '@discovr/core.tooltip';
import { WidthObserver } from '@discovr/helpers.width-detector';

import MediaButton from '../MediaButton';
import { messages } from '../messages';

export interface PlaybackSpeedControlsProps {
  playbackSpeed: number;
  onPlaybackSpeedChange: (playbackSpeed: number) => void;
  originalDimensions?: NumericalCardDimensions;
}

export interface PlaybackSpeedControlsState {
  popupHeight: number;
}

const { N600, N900 } = colors;

export class PlaybackSpeedControls extends Component<
  PlaybackSpeedControlsProps & InjectedIntlProps,
  PlaybackSpeedControlsState
> {
  state: PlaybackSpeedControlsState = {
    popupHeight: 255,
  };
  private onPlaybackSpeedChange = (option: ValueType<OptionType>) => {
    const { onPlaybackSpeedChange } = this.props;
    if (!option) {
      return;
    }

    const playbackSpeed = parseFloat(`${(option as OptionType).value}`);
    onPlaybackSpeedChange(playbackSpeed);
  };

  private speedOptions: () => GroupedOptionsType<OptionType> = () => [
    {
      label: <FormattedMessage {...messages.playbackSpeed} />,
      options: [
        { label: '0.75x', value: 0.75 },
        { label: '1x', value: 1 },
        { label: '1.25x', value: 1.25 },
        { label: '1.5x', value: 1.5 },
        { label: '2x', value: 2 },
      ],
    },
  ];

  private popupCustomStyles: StylesConfig = {
    container: (styles) => ({ ...styles, backgroundColor: N900 }),
  };

  private onResize = (width: number) => {
    const { originalDimensions } = this.props;
    if (originalDimensions) {
      const aspectRatio = originalDimensions.height / originalDimensions.width;
      const controlsSize = 60;
      const minimumHeight = 100;
      const popupHeight = Math.max(
        aspectRatio * width - controlsSize,
        minimumHeight,
      );

      this.setState({ popupHeight });
    }
    // This is a hacky solution. Please replace with a better one if you find one.
    // There is something inside popper.js that recalc position on scroll.
    // We enable this functionality with `eventListeners` modifier.
    // Here we simulate scroll even to trick popper.js to recalc position.
    window.dispatchEvent(new CustomEvent('scroll'));
  };

  render() {
    const { playbackSpeed, intl } = this.props;
    const { popupHeight } = this.state;
    const value = this.speedOptions()[0].options.find(
      (option: { value: any }) => option.value === playbackSpeed,
    );

    const popperProps: PopupSelect['props']['popperProps'] = {
      strategy: 'fixed',
      modifiers: [
        {
          name: 'preventOverflow',
          enabled: true,
        },
        {
          name: 'eventListeners',
          options: {
            scroll: true,
            resize: true,
          },
        },
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
      placement: 'top',
    };

    return (
      <>
        <WidthObserver setWidth={this.onResize} />
        <PopupSelect
          minMenuWidth={140}
          maxMenuHeight={popupHeight}
          options={this.speedOptions()}
          value={value}
          theme={(theme) => ({
            ...theme,
            colors: { ...theme.colors, primary25: N600 },
          })}
          closeMenuOnScroll={true}
          onChange={this.onPlaybackSpeedChange}
          target={({ ref, isOpen }) => (
            <Tooltip
              content={intl.formatMessage(messages.playbackSpeed)}
              position="top"
            >
              <MediaButton buttonRef={ref} isSelected={isOpen}>
                {playbackSpeed}x
              </MediaButton>
            </Tooltip>
          )}
          styles={this.popupCustomStyles}
          popperProps={popperProps}
        />
      </>
    );
  }
}

export default injectIntl(PlaybackSpeedControls);
