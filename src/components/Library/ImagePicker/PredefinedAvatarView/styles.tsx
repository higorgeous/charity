import { ComponentClass, ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export interface AvatarImageProps {
  isSelected: boolean;
}

const AvatarImage = styled.img<any>`
  border-radius: 8px;
  cursor: pointer;
  ${({ isSelected }: AvatarImageProps) =>
    isSelected
      ? `
    box-shadow: 0px 0px 0px 1px var(--color-bg-primary), 0px 0px 0px 3px var(--color-bg-primary);
  `
      : ''};
`;

export const LargeAvatarImage = styled(AvatarImage)<
  ComponentClass<ImgHTMLAttributes<{}> & AvatarImageProps>
>`
  width: ${8 * 9}px;
  height: ${8 * 9}px;
`;

export const SmallAvatarImage = styled(AvatarImage)<
  ComponentClass<ImgHTMLAttributes<{}> & AvatarImageProps>
>`
  width: ${8 * 5}px;
  height: ${8 * 5}px;
`;

export const PredefinedAvatarViewWrapper = styled.div`
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
