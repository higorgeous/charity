import { getLocalMediaFeatureFlag } from './mediaFeatureFlag-local';

export interface PollingOptions {
  poll_intervalMs?: number;
  poll_maxAttempts?: number;
  poll_backoffFactor?: number;
  poll_maxIntervalMs?: number;
  poll_maxGlobalFailures?: number;
}

// Media feature flags - type and defaults defined here in one source of truth
export interface MediaFeatureFlags extends PollingOptions {
  newCardExperience?: boolean;
  zipPreviews?: boolean;
  captions?: boolean;
  folderUploads?: boolean;
  codeViewer?: boolean;
}

// default values defined here, not necessary for components to know directly as they should use the function below
export const defaultMediaFeatureFlags: MediaFeatureFlags = {
  newCardExperience: false,
  zipPreviews: false,
  captions: false,
  folderUploads: false,
  codeViewer: false,
  poll_intervalMs: 3000,
  poll_maxAttempts: 30,
  poll_backoffFactor: 1.25,
  poll_maxIntervalMs: 200000,
  poll_maxGlobalFailures: 10,
};

export function getMediaFeatureFlag<T = boolean>(
  flagName: keyof MediaFeatureFlags,
  featureFlags?: MediaFeatureFlags,
): T {
  const devOverride = getLocalMediaFeatureFlag(flagName);
  if (devOverride !== null) {
    try {
      return JSON.parse(devOverride) as T;
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
  if (featureFlags) {
    return ((flagName in featureFlags
      ? featureFlags[flagName]
      : defaultMediaFeatureFlags[flagName]) as unknown) as T;
  }
  return (defaultMediaFeatureFlags[flagName] as unknown) as T;
}

/**
 * do a check for any localStorage overrides, warn user once only
 */
Object.keys(defaultMediaFeatureFlags).forEach((flagName) => {
  const localOverride = getLocalMediaFeatureFlag(flagName);
  if (localOverride !== null) {
    // eslint-disable-next-line no-console
    console.info(
      `%c* LOCAL * MediaFeatureFlag.${flagName} = ${localOverride}`,
      'font-weight:bold;color:cyan',
    );
  }
});
