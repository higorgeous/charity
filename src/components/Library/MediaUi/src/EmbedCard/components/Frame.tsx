/** @jsx jsx */
import { jsx } from '@emotion/core';
import React, { useState } from 'react';

export interface FrameProps {
  url?: string;
}

export const Frame = React.forwardRef<HTMLIFrameElement, FrameProps>(
  ({ url }, iframeRef) => {
    const [isIframeLoaded, setIframeLoaded] = useState(false);
    if (!url) {
      return null;
    }

    return (
      <iframe
        ref={iframeRef}
        src={url}
        data-iframe-loaded={isIframeLoaded}
        css={{
          border: 0,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '3px',
        }}
        allowFullScreen
        scrolling="yes"
        allow="autoplay; encrypted-media"
        onLoad={() => setIframeLoaded(true)}
      />
    );
  },
);
