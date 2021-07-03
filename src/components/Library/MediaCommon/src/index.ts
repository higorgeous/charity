export { downloadUrl } from './downloadUrl';

// Warning! You can't add new media types!
export type MediaType =
  | 'doc'
  | 'audio'
  | 'video'
  | 'image'
  | 'archive'
  | 'unknown';

// Media Feature Flags
export {
  getMediaFeatureFlag,
  defaultMediaFeatureFlags,
} from './mediaFeatureFlags';
export type { MediaFeatureFlags } from './mediaFeatureFlags';

export interface NumericalCardDimensions {
  width: number;
  height: number;
}
