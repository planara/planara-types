// Enums
import { BenchmarkTestStatus, BenchmarkTestType } from '../../enums';

/** Результат прохождения тестирования приложения */
export type BenchmarkTestRunResult = {
  /** Тип тестирования */
  type: BenchmarkTestType;

  /** Статус прохождения тестирования */
  status: BenchmarkTestStatus;
};
