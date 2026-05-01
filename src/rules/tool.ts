// Types
import type { SelectMode } from '../enums';
import { ToolType } from '../enums';

/**
 * Правила доступа к инструментам, доступным для каждого режима выборки
 */
export const DEFAULT_TOOL_RULES: Record<SelectMode, ToolType[]> = {
  mesh: [ToolType.Translate, ToolType.Rotate, ToolType.Scale],
  face: [ToolType.Translate],
  edge: [ToolType.Translate],
  vertex: [ToolType.Translate],
};
