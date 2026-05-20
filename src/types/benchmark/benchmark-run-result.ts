// Types
import type { BenchmarkTestRunResult } from './benchmark-test-run-result';

/** Результаты тестирования приложения */
export type BenchmarkRunResult = {
  /** Пройденные тесты */
  tests: BenchmarkTestRunResult[];
};
