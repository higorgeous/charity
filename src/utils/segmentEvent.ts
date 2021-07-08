import isClientSide from './isClientSide';

const segmentEvent = (event: string, properties: any) => {
  if (isClientSide)
    (window as any).analytics.track(event, properties);
};

export default segmentEvent;
