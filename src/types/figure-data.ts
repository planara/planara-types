import type { FigureType } from '../enums/figure-type';

/**
 * Тип данных для создания Figure
 */
export type FigureData = {
  /** Тип фигуры */
  type: FigureType;

  /** Позиции вершин */
  position: number[];

  /** Нормали вершин (опционально) */
  normal?: number[];

  /** UV-координаты (опционально) */
  uv?: number[];

  /** Материал (опционально) */
  material?: any;
};
