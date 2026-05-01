// Types
import type { RendererColor } from './renderer-color';
import type { Vec3 } from '../common/vec3';

export type RendererDirectionalLightConfig = {
  enabled: boolean;
  color: RendererColor;
  intensity: number;
  position: Vec3;
};
