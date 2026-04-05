/**
 * Типы базовых фигур.
 * Используется для обозначения геометрии объекта.
 */
export enum FigureType {
  /** Плоскость */
  Plane,

  /** Куб */
  Cube,

  /** Сфера */
  Sphere,

  /** UV-сфера */
  UVSphere,

  /** Икосфера */
  Icosphere,

  /** Цилиндр */
  Cylinder,

  /** Конус */
  Cone,

  /** Пирамида с квадратным основанием */
  Pyramid,

  /** Тетраэдр (треугольная пирамида) */
  Tetrahedron,

  /** Октаэдр */
  Octahedron,

  /** Додекаэдр */
  Dodecahedron,

  /** Тор */
  Torus,

  /** Тор-кнот */
  TorusKnot,

  /** Круг */
  Circle,

  /** Кольцо */
  Ring,

  /** Капсула */
  Capsule,

  /** Кастомная фигура */
  Custom,
}
