// Types
import type { Vec3 } from '../common/vec3';

export type RendererCameraConfig = {
  fov: number;
  near: number;
  far: number;
  position: Vec3;
};
