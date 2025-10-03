import type {FigureData} from "../types/figure-data";

/**
 * Класс, представляющий 3D-фигуру с вершинами, нормалями, UV и материалом.
 */
export class Figure {
    /** Позиции вершин */
    position: number[];

    /** Нормали вершин */
    normal?: number[];

    /** UV-координаты */
    uv?: number[];

    /** Материал (опционально) */
    material?: any;

    /**
     * Создаёт новую фигуру
     * @param data - исходные данные фигуры
     */
    constructor(data: FigureData) {
        this.position = data.position;
        this.normal = data.normal ?? [];
        this.uv = data.uv ?? [];
        this.material = data.material;
    }
}