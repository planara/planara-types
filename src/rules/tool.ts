// Types
import type { SelectMode } from '../enums/select-mode';
import { ToolType } from '../enums/tool-type';

/**
 * Правила доступа к инструментам, доступным для каждого режима выборки
 */
export const DEFAULT_TOOL_RULES: Record<SelectMode, ToolType[]> = {
  mesh: [ToolType.Translate, ToolType.Rotate, ToolType.Scale],
  face: [ToolType.Translate, ToolType.Rotate, ToolType.Scale],
  edge: [ToolType.Translate],
  vertex: [ToolType.Translate],
};
