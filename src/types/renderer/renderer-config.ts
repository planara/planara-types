// Types
import type { RendererBackgroundConfig } from './renderer-background-config';
import type { RendererCameraConfig } from './renderer-camera-config';
import type { RendererOptionsConfig } from './renderer-options-config';
import type { RendererLightsConfig } from './renderer-lights-config';

export type RendererConfig = {
  background: RendererBackgroundConfig;
  camera: RendererCameraConfig;
  renderer: RendererOptionsConfig;
  lights: RendererLightsConfig;
};
