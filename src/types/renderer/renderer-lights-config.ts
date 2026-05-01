// Types
import type { RendererAmbientLightConfig } from './renderer-ambient-light-config';
import type { RendererDirectionalLightConfig } from './renderer-directional-light-config';

export type RendererLightsConfig = {
  ambient: RendererAmbientLightConfig;
  directional: RendererDirectionalLightConfig;
};
