// Types
import type { Vec3 } from './vec3';

/**
 * Трансформация фигуры/объекта в редакторе
 */
export type FigureTransform = {
  /** Позиция в мировых координатах */
  position: Vec3;
  /** Поворот вокруг осей (радианы) */
  rotation: Vec3;
  /** Масштаб по осям */
  scale: Vec3;
  /** Габариты по bounding box (width/height/depth) */
  size: Vec3;
};
