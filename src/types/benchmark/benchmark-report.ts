// Enums
import { BenchmarkRecommendation } from '../../enums';
// Types
import type { BenchmarkTestReport } from './benchmark-test-report';

/** Отчет по тестированию приложения */
export type BenchmarkReport = {
  /** Дата создания */
  createdAt: string;

  /** Результаты тестирования */
  tests: BenchmarkTestReport[];

  /** Рекомендации по использованию приложения */
  recommendation?: BenchmarkRecommendation;
};
