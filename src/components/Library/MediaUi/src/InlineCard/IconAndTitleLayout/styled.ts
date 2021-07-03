import styled from 'styled-components';
import { HTMLAttributes, ComponentClass } from 'react';

export const IconObjectOverrides = `
  & > span {
    height: 16px;
    width: 14px;
    position: absolute;
    top: 0;
    left: 0;
    line-height: 14px;
    & > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const IconOverrides = `
  & > span > span {
    height: 16px;
    width: 14px;
    position: absolute;
    top: 0;
    left: 0;
    & > svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

export const IconWrapper = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  user-select: none;
  ${IconOverrides}
  ${IconObjectOverrides}
`;

export const IconTitleWrapper = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  hyphens: auto;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
`;

export const LozengeWrapper = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  display: inline-block;
  vertical-align: 1px;
  & > span {
    margin-left: 4px;
    padding: 2px 0 1px 0;
  }
`;
export const LozengeBlockWrapper = styled.span<
  ComponentClass<HTMLAttributes<{}>>
>`
  & > span {
    margin-left: 4px;
    padding: 2px 0 2px 0;
  }
`;

// The following components are used to absolutely position icons in the vertical center.
// - IconPositionWrapper: the `relative` parent which has no height in itself.
// - IconEmptyWrapper: the child which forces `IconPositionWrapper` to have a height.
export const IconPositionWrapper = styled.span<
  ComponentClass<HTMLAttributes<{}>>
>`
  margin-right: 4px;
  position: relative;
  display: inline-block;
`;
export const IconEmptyWrapper = styled.span<ComponentClass<HTMLAttributes<{}>>>`
  width: 14px;
  height: 100%;
  display: inline-block;
  opacity: 0;
`;
