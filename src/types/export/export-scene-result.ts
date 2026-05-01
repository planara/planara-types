// Types
import type { ExportResult } from './export-result';
import type { IResponse } from '../response';

export type ExportSceneResult = {
  response: IResponse | null;
  result: ExportResult | null;
};
