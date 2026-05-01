/**
 * Enum типов ответа от политик и валидаторов.
 */
export enum ResponseType {
  /** Действие заблокировано, инструмент недоступен */
  NotAllowed = 'NOT_ALLOWED',

  /** Действие выполнено успешно */
  Success = 'SUCCESS',

  /** Действие не выполнено, потому что нет изменений */
  NoChange = 'NO_CHANGE',

  /** Произошла ошибка валидации */
  ValidationError = 'VALIDATE_ERROR',

  /** Произошла внутренняя ошибка */
  Error = 'ERROR',
}
