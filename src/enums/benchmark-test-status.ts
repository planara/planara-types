/** Статус тестирования приложения */
export enum BenchmarkTestStatus {
  /** Тесты прошли успешно */
  Success = 'SUCCESS',

  /** Тесты завершились с ошибкой */
  Failed = 'FAILED',

  /** Тесты были пропущены */
  Skipped = 'SKIPPED',
}
