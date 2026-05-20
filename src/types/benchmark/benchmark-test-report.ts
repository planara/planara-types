// Enums
import { BenchmarkTestStatus, BenchmarkTestType } from '../../enums';
// Types
import type { BenchmarkMetrics } from './benchmark-metrics';

/** Отчет прохождения тестирования приложения */
export interface BenchmarkTestReport {
  /** Тип тестирования */
  type: BenchmarkTestType;

  /** Статус прохождения тестирования */
  status: BenchmarkTestStatus;

  /** Полученные метрики за время тестирования */
  metrics?: BenchmarkMetrics;

  /** Ошибки при прохождении тестирования */
  error?: string;
}
