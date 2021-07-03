export const getLocalMediaFeatureFlag = (key: string) =>
  typeof window !== 'undefined' && window.localStorage
    ? window.localStorage.getItem(key)
    : null;
