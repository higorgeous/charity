import { HTMLAttributes, ComponentClass, ImgHTMLAttributes } from 'react';
import styled from 'styled-components';

import { colors, constants, themed } from '@discovr/core.theme';

const { borderRadius, gridSize } = constants;
const { B100, B200, N0, DN30 } = colors;

export interface AvatarImageProps {
  isSelected: boolean;
}

const AvatarImage = styled.img<any>`
  border-radius: ${borderRadius()};
  cursor: pointer;
  ${({ isSelected }: AvatarImageProps) =>
    isSelected
      ? `
    box-shadow: 0px 0px 0px 1px ${themed({
      light: N0,
      dark: DN30,
    })}, 0px 0px 0px 3px ${themed({
          light: B200,
          dark: B100,
        })};
  `
      : ''};
`;

export const LargeAvatarImage = styled(AvatarImage)<
  ComponentClass<ImgHTMLAttributes<{}> & AvatarImageProps>
>`
  width: ${gridSize() * 9}px;
  height: ${gridSize() * 9}px;
`;

export const SmallAvatarImage = styled(AvatarImage)<
  ComponentClass<ImgHTMLAttributes<{}> & AvatarImageProps>
>`
  width: ${gridSize() * 5}px;
  height: ${gridSize() * 5}px;
`;

export const PredefinedAvatarViewWrapper = styled.div<
  ComponentClass<HTMLAttributes<{}>>
>`
  ul {
    display: flex;
    flex-flow: row wrap;
    width: 353px;
    max-height: 294px;
    overflow-y: auto;

    padding: 0;
    margin: 0;

    list-style-type: none;

    li {
      padding-right: 4px;
      padding-left: 4px;
      padding-bottom: 8px;
      margin: 0;
    }
  }

  .header {
    display: flex;
    align-items: center;

    padding-top: 4px;
    padding-bottom: 8px;

    .description {
      padding-left: 8px;
    }

    .back-button {
      width: 32px;
      height: 32px;
      border-radius: 16px;

      align-items: center;
      justify-content: center;

      margin: 0;
      padding: 0;
    }
  }

  /* hide tickbox and file type icon in overlay
   * because those are not necessary for avatars */

  .tickbox {
    visibility: hidden;
  }

  .file-type-icon {
    visibility: hidden;
  }
`;
