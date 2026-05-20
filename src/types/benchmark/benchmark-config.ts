// Enums
import { BenchmarkTestType } from '../../enums';

/** Конфиг для запуска бенчмарка */
export type BenchmarkConfig = {
  /** Виды тестов, которые нужно запустить */
  tests: BenchmarkTestType[];

  /** Длительность тестов */
  durationMs: number;
};
