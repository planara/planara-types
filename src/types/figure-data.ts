/**
 * Тип данных для создания Figure
 */
export type FigureData = {
    /** Позиции вершин */
    position: number[];

    /** Нормали вершин (опционально) */
    normal?: number[];

    /** UV-координаты (опционально) */
    uv?: number[];

    /** Материал (опционально) */
    material?: any;
}