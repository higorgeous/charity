import styled from '@emotion/styled';

// Using module augmentation to add crossOrigin attribute as it does not exist yet, PR has been opened in
// DefinitelyTyped for it
declare module 'react' {
  interface ImgHTMLAttributes<T> {
    alt?: string;
    crossOrigin?: 'anonymous' | 'use-credentials' | '';
    height?: number | string;
    sizes?: string;
    src?: string;
    srcSet?: string;
    useMap?: string;
    width?: number | string;
  }
}

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 4px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  /* Is needed so image is not selected, when dragged */
  -webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Likely future */
  border-radius: 4px;
`;

export const CONTAINER_PADDING = 28;

const Mask = styled.div`
  position: absolute;
  top: ${CONTAINER_PADDING}px;
  bottom: ${CONTAINER_PADDING}px;
  left: ${CONTAINER_PADDING}px;
  right: ${CONTAINER_PADDING}px;
  box-shadow: 0 0 0 100px #ffffff;
`;

export const RectMask = styled(Mask)`
  border-radius: 4px;
`;

export const CircularMask = styled(Mask)`
  border-radius: 500px;
`;

export const DragOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: move;
`;

export const RemoveImageContainer = styled.div`
  position: absolute;
  right: 4px;
  top: 4px;
`;

export const RemoveImageButton = styled.button`
  border-radius: 4px;
  background-color: transparent;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  padding: 0;
  color: #002358;
  background-color: #d4e1f3;
  svg {
    position: absolute;
    top: 4px;
    left: 4px;
  }
`;
