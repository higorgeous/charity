import { ImgHTMLAttributes, HTMLAttributes } from 'react';
import styled from '@emotion/styled';

export const checkeredBgLight =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOC0xMC0zMFQxMjoxMDo5MjwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjcuNTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj4wPC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTA8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KX+XPjwAAACtJREFUGBljPHv27H8GNGBsbMyIJsTAhC6Aiz+ACjEcDXIjNg8OoBuJthoAzy0HeT3Qcc0AAAAASUVORK5CYII=';

export const checkeredBgDark =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA4SURBVHgBxY6xDQAgCARfY6uu4QDu4P6jCANATygIDVd+Lp9r5z6BgenbCR1BCsXhhc+184+FogJV5AeOadAsTQAAAABJRU5ErkJggg==';

const checkeredBg = 'var(--avatar-checkeredBg)';

export interface SizeProps {
  width?: number;
  height?: number;
}

export interface ColorProps {
  backgroundColor?: string;
}

export interface BoundsProps {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface MarginProps {
  margin: number;
}

export interface TransformProps {
  transform?: string;
}

export const ImagePlacerWrapper = styled.div<any>`
  background-color: ${(props: ColorProps) => props.backgroundColor};
  display: inline-block;
`;

export const ImagePlacerErrorWrapper = styled.div`
  background-color: var(--color-text-error);
  color: white;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 45%;
`;

export type ContainerWrapperProps = MarginProps &
  SizeProps &
  ColorProps &
  HTMLAttributes<{}>;

export const ContainerWrapper = styled.div`
  background: url('${checkeredBg}');
  width: ${({ width, margin }: ContainerWrapperProps) =>
    width !== undefined ? width! + margin * 2 : 0};
  height: ${({ height, margin }: ContainerWrapperProps) =>
    height !== undefined ? height! + margin * 2 : 0};
  position: relative;
  cursor: move;
  user-select: none;
  overflow: hidden;
`;

export const EASING = 0.15;

export type ImageWrapperProps = ImgHTMLAttributes<{}> &
  TransformProps &
  BoundsProps;

export const ImageWrapper = styled.img<ImageWrapperProps>`
  left: ${({ x }) => x};
  top: ${({ y }) => y};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transform: ${({ transform }: any) => transform};
  position: absolute;
  transition: margin-left ${EASING}s ease-out, margin-top ${EASING}s ease-out,
    left ${EASING}s ease-out, top ${EASING}s ease-out, width ${EASING}s ease-out,
    height ${EASING}s ease-out;
  user-select: none;
  pointer-events: none;
`;

export interface MarginWrapperProps {
  width: number;
  height: number;
  size: number;
}

export const MarginWrapperSquare = styled.div<any>`
  position: absolute;
  border: 1px dotted var(--color-bg-element);
  left: 0;
  top: 0;
  border-style: solid;
  border-color: var(--color-bg-element);
  border-width: ${(props) => props.size}px;
  width: ${({ width }: any) => width}px;
  height: ${({ height }: any) => height}px;
`;

export const MarginWrapperCircle = styled.div<any>`
  position: absolute;
  overflow: hidden;
  left: 0px;
  top: 0px;
  width: ${({ width, size }) => width + size * 2}px;
  height: ${({ height, size }) => height + size * 2}px;

  &:after {
    content: '';
    position: absolute;
    left: ${({ size }) => size}px;
    top: ${({ size }) => size}px;
    border-radius: 100%;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    box-shadow: 0px 0px 0px ${({ width, height }) => Math.max(width, height)}px
      var(--color-bg-primary);
  }
`;
