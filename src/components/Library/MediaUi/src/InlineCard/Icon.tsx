import styled from 'styled-components';
import { ComponentClass, HTMLAttributes, ImgHTMLAttributes } from 'react';

// TODO: Figure out a more scalable/responsive solution
// for vertical alignment.
// Current rationale: vertically positioned at the top of
// the smart card container (when set to 0). Offset this
// to position it with appropriate whitespace from the top.
export const Icon = styled.img<ComponentClass<ImgHTMLAttributes<{}>>>`
  height: 14px;
  width: 14px;
  margin-right: 4px;
  border-radius: 2px;
  user-select: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// Used for 'untrue' icons which claim to be 16x16 but
// are less than that in height/width.
// TODO: Replace this override with proper solution.
export const DBIconWrapper = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  margin-right: -2px;
`;
