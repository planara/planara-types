// Types
import { ResponseType } from '../../enums';

/**
 * Тип ответа от менеджеров или политик редактора.
 */
export type IResponse = {
  /** Тип ответа (enum ResponseType) */
  type: ResponseType;

  /** Читаемое сообщение для отображения или логирования */
  message: string;

  /** Строковый код для логов или интеграций (опционально) */
  code?: string;

  /** Флаг блокировки действия (true, если вызов запрещён) */
  blocked?: boolean;
};
